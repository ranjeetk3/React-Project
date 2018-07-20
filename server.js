var express = require('express')
var bodyParser = require("body-parser")
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
app.use(bodyParser.json())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true }))
var router = require("./node_api/chat")
app.use('/api', router);
var request = require('request')
var consts = require('./const')
var users=[]
io.on('connection', function(socket) {
	socket.on('loginRequest',function(userId){
		var MatchId = false
		if (users.length != 0) {
			for (var key in users) {
				var row = users[key]
				if (row.userId == userId) {
					users[key].id = socket.id
					MatchId = true
					break
				}
			}
		}
		if (MatchId == false) {
			users.push({id:socket.id,userId:userId})
		}
		console.log('users ' + JSON.stringify(users))
		io.emit('loggedInUsers',users)
	});
	socket.on('new-message', function(messageData){
		if (messageData.length != 0) {
			var options = {
				url : consts.url + '/api/saveChat',
				method : 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + messageData.loginToken
				},
				json : true,
				body : {
					from_user_id : messageData.senderId,
					to_user_id : messageData.recieverId,
					message: messageData.message
				}
			};
			request(options, function (error, response, body) {
				if(error) {
					console.log(error);
				} else {
					if (!body.errno) {
						io.to(messageData.socketId).emit('recieve-message', {senderSocketId:socket.id, recieverSocketId:messageData.socketId, message:messageData.message, senderId:messageData.senderId, recieverId:messageData.recieverId})
						io.to(socket.id).emit('recieve-message', {senderSocketId:socket.id, recieverSocketId:socket.id, message:messageData.message, senderId:messageData.senderId, recieverId:messageData.recieverId})
					}
				}
			});
		}
	})
	
	socket.on('new-file', function(messageData){
		if (messageData.length != 0) {
			var options = {
				url : consts.url + '/api/saveChat',
				method : 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + messageData.loginToken
				},
				json : true,
				body : {
					from_user_id : messageData.senderId,
					to_user_id : messageData.recieverId,
					attachment : messageData.file.toString('base64'),
					fileName : messageData.name,
					fileType : messageData.type
				}
			};
			request(options, function (error, response, body) {
				if(error) {
					console.log(error);
				} else {
					if (!body.errno) {
						io.to(messageData.socketId).emit('recieve-message', {senderSocketId:socket.id, recieverSocketId:messageData.socketId, file:messageData.file.toString('base64'), fileName: messageData.name, fileType: messageData.type, senderId:messageData.senderId, recieverId:messageData.recieverId})
						io.to(socket.id).emit('recieve-message', {senderSocketId:socket.id, recieverSocketId:socket.id, file:messageData.file.toString('base64'), fileName: messageData.name, fileType: messageData.type, senderId:messageData.senderId, recieverId:messageData.recieverId})
					}
				}
			});
		}
	})
	
	socket.on('update-message-status', function(userDetails){
		var options = {
			url : consts.url + '/api/update-message-status',
			method : 'PUT',
			json : true,
			headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization':'Bearer ' + userDetails.loginToken
				},
			body : {
				from_user_id:userDetails.fromUser
			}
		};
		request(options, function (error, response, body) {
			var resultStatus = false
			if(error) {
				resultStatus = false
			} else {
				if (!body.errno) {
					resultStatus = true
				}
			}
			io.emit('update-message-status-reult', {result:resultStatus})
		});
	})
	
	socket.on('notifyUser', function(userDetails){
		io.emit('notifyUser', userDetails)
	})
})
http.listen('3000', function(){
	console.log('We are connected')
})