// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'

// style
import style from './style.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'socket.io/lib/socket.js'

// components
import Form from '../Form'
import DashboardHeader from '../DashboardHeader'
import DashboardHeaderTitle from '../DashboardHeaderTitle'
import FormInput from '../FormInput'
import FormTextarea from '../FormTextarea'
import { Col, Button, Modal, ProgressBar } from 'react-bootstrap'

// exports
var loggedInUserId, userName
var searchUsersList=[]
var messageCounterArray = []
var sortedPriviouseUsers = []
export class MobileChat extends Form {
	constructor(props) {
		super(props)
		this.state = {currentStatus:0, messages:[], socket:window.io('http://localhost:3000'),
		loggedinUsers:[], socketId:'', userId:'', selectedUserName:'', selectUserId:'', searchUser:0,
		showModal: false, confirmMessage:'', selectedUserInformation:[], notifyUserMessage:'', unreadCounter:'', loggedInStatus:false}
		this.setSocketId = this.setSelectedUserDetails.bind(this)
	}
	changeAction(e) {
		this.setState({currentStatus:!this.state.currentStatus})
	}
	componentDidMount() {
		const { session, dispatch, form } = this.props
		var self = this
		var logginUserArray = session.loginUser
		var loginUser = logginUserArray.session
		loggedInUserId = loginUser.user_id
		userName = loginUser.firstName
		{self.getAllChatsUsers()}
		self.state.socket.on('recieve-message', function(msg){
			const {form } = self.props
			var match = 0
			for (var key in sortedPriviouseUsers) {
				var row = sortedPriviouseUsers[key]
				if ((row.id == msg.recieverId) || (row.id == msg.senderId)) {
					match++
					break
				} else {
					continue
				}
			}
			if ((match == 0) && (self.state.selectUserId == msg.recieverId)) {
				var messages = self.state.messages
				messages.push(msg)
				self.setState({messages:messages})
				
				{self.getAllChatsUsers()}
			}
			if ((match == 0) && (self.state.selectUserId != msg.senderId)) {
				{self.getAllChatsUsers()}
			}
			if (((match == 1)) && ((self.state.selectUserId == msg.recieverId) || (self.state.selectUserId == msg.senderId))) {
				var messages = self.state.messages
				messages.push(msg)
				self.setState({messages:messages})
				if (self.state.selectUserId == msg.senderId) {
					var userDetails = {
						fromUser:self.state.selectUserId,
						toUser:loggedInUserId
					}
					self.state.socket.emit('update-message-status', userDetails)
					self.state.socket.on('update-message-status-reult',function(data){
						if (data.result == true) {
							{self.getAllChatsUsers()}
						}
					})
				}
			} else if (match == 1){
				{self.getAllChatsUsers()}
			}
		})
		self.state.socket.emit('loginRequest', loggedInUserId) 
		self.state.socket.on('loggedInUsers',function(data){
			self.setState({loggedinUsers:data})
		})
		
		self.state.socket.on('notifyUser', function(userDetails){
			if(userDetails.userId != loggedInUserId) {
				self.setState({notifyUserMessage: userDetails.userName + ' is typing ...'})
			}
			setTimeout(function(){
				self.setState({notifyUserMessage:''})
			}, 800)
		})
	}
	close(e) {
		this.setState({ showModal: false });
	}
	scroll() {
		var objDiv = document.getElementById("chatArea")
		objDiv.scrollTop = objDiv.scrollHeight
	}
	open() {
		var self = this
		var file = findDOMNode(this.refs.file).files[0]
		self.setState({ showModal: true, confirmMessage:'You uploaded ' + file.name + ' file.Are you sure you want to upload?' })
	}
	setFieldValue(field, e) {
		e.preventDefault()
		const { form, dispatch } = this.props
		var value = e.target.value
		dispatch({
			type: 'SET_CHATBOX_FORM_FIELD_VALUE',
			params: {
				field: field,
				value: value
			}
		})
		if (field == 'searchBox') {
			if (value.length >= 2) {
				dispatch({
					type: 'GET_USERS_BY_COMPANY_AND_PERMISSIONS',
					payload: {
						userDeatils:{
							name:value,
							id:loggedInUserId
						}
					}
				})
			} else {
				dispatch({
					type: 'RESET_SEARCH_RESULT'
				})
			}
		}
		if (field == 'message') {
			var userDetails = {
				userId:loggedInUserId,
				userName:userName
			}
			this.state.socket.emit('notifyUser', userDetails)
		}
	}
	submit(e) {
		const { form, dispatch } = this.props
		e.preventDefault()
		var messageData = {
			senderId:loggedInUserId,
			recieverId:this.state.selectUserId,
			socketId:this.state.socketId,
			message:form.data.message
		}
		this.state.socket.emit('new-message', messageData)
		findDOMNode(this.refs.form).reset()
	}
	
	setSelectedUserDetails(userInfo, e) {
		const { dispatch } = this.props
		var self = this
		this.setState({socketId:userInfo.socketId, selectedUserName:userInfo.name, selectUserId:userInfo.userId, messages:[], unreadCounter:userInfo.unreadCounter, loggedInStatus:userInfo.loggedInStatus})
		dispatch({
			type: 'RESET_SEARCH_RESULT'
		})
		dispatch({
			type: 'SET_CHATBOX_FORM_FIELD_VALUE',
			params: {
				field: 'searchBox',
				value: ''
			}
		})
		dispatch({
			type: 'GET_ALL_CHATS_WITH_USERS',
			payload: {
				userDetails: {
					selectUserId:userInfo.userId,
					loggedIdUserId:loggedInUserId
				}
			}
		})
		dispatch({
			type: 'GET_USER_BY_ID',
			payload: {
				userDetails: {
					userId:userInfo.userId
				}
			}
		})
		if (userInfo.unreadCounter > 0) {
			var userDetails = {
				fromUser:userInfo.userId,
				toUser:loggedInUserId
			}
			this.state.socket.emit('update-message-status', userDetails)
			this.state.socket.on('update-message-status-reult',function(data){
				if (data.result == true) {
					{self.getAllChatsUsers()}
				}
			})
			
		}
	}
	getAllChatsUsers() {
		const { dispatch } = this.props
		dispatch({
			type: 'GET_RECENT_CHAT_USERS',
			payload: {
				id:loggedInUserId
			}
		})
	}
	
	handleFileChange() {
		<ProgressBar now={60} />
		var self = this
		var file = findDOMNode(this.refs.file).files[0],
		reader = new FileReader()
		reader.onload = function(evt) {
			var jsonObject = {
				senderId:loggedInUserId,
				recieverId:self.state.selectUserId,
				socketId:self.state.socketId,
				file:evt.target.result,
				name:file.name,
				type:file.type
			}
			self.state.socket.emit('new-file', jsonObject)	
		}

		reader.readAsDataURL(file)
		this.close()
  }
  render() {
		var self = this
		const { form, users } = self.props
		var recentChatUsersArray = form.recentChatUsers
		var searchUsersArray = form.searchUsersList
		var loggedInUsersArray = self.state.loggedinUsers
		var allChatsWithUserArray = form.allChatsWithUser
		var messagesArray = self.state.messages
		var selectedUserArray = users.userDetails
		var priviouseUsers = []
		recentChatUsersArray.map(function (user) {
			var userId = user.from_user_id == loggedInUserId ? user.to_user_id : user.from_user_id
			var userName = user.from_user_id == loggedInUserId ? user.reciever : user.sender
			var readCount = user.from_user_id == loggedInUserId ? '' : user.statusCount
			var status = user.from_user_id == loggedInUserId ? '' : user.status
			function findUserId(userdata) { 
				return userdata.id === userId
			}
			var matchUSerArray =  priviouseUsers.find(findUserId)
			if ((matchUSerArray != undefined)) {
				if (((matchUSerArray.status == 1) || (matchUSerArray.status == null )) && (user.from_user_id != loggedInUserId) ) {
					var index = priviouseUsers.indexOf(matchUSerArray)
					if (index > -1) {
						priviouseUsers.splice(index, 1)
					}
					var userDetails = {
						'id' : userId,
						'status':status,
						'name' : userName,
						'unreadCount' : readCount
					}
					priviouseUsers.push(userDetails)
				}
			} else {
				var userDetails = {
					'id' : userId,
					'status':status,
					'name' : userName,
					'unreadCount' : readCount
				}
				priviouseUsers.push(userDetails)
			}
		})
		sortedPriviouseUsers = _.sortBy(priviouseUsers, 'id', function(n) {
			return Math.sin(n)
		})
		var recentChatUsers = []
		for (var key in sortedPriviouseUsers) {
			var loggedIn = false
			var socketId = ''
			var unreadCount  = ''
			var row = sortedPriviouseUsers[key]
			loggedInUsersArray.map(function (userDetails) {
				if (row.id == userDetails.userId) {
					loggedIn = true
					socketId = userDetails.id
				}
			})
			if ((row.status == 0) && (row.unreadCount > 0)) {
				unreadCount = row.unreadCount
			}
			var userInfo = {
				'socketId' : socketId,
				'name' : row.name,
				'userId': row.id,
				'unreadCounter' : unreadCount,
				'loggedInStatus' : loggedIn
			}
			recentChatUsers.push(
				<user>
					<userSection style = {style.userSection} onClick={this.setSelectedUserDetails.bind(this, userInfo)}> 
						<userImg style = {style.userImg}> 
							<img src="http://localhost/img/userImg05.png"/>
							{ loggedIn == true ?
								<span style = {style.onlinecircel}> 
									<img src="http://localhost/img/online-arrow.png"/>
								</span> : ''
							}
						</userImg>
						<user style = {style.user}>
							<userh1 style = {[style.userh1, style.displayBlock]}>{row.name}</userh1>
							{unreadCount != '' ? <onlibeCircle> <span style={style.messageCircle}> {unreadCount}</span> </onlibeCircle> : ''}
							<userh2 style = {style.userh2}>Lorem ipsum dolor sit amet ...</userh2>
							
						</user>
					</userSection>
					<divider style = {[style.divider, style.displayBlock]}>  </divider>
				</user>
			)
		}
		var searchUsersList =[]
		for (var key in searchUsersArray) {
			var loggedIn = false
			var socketId = ''
			var row = searchUsersArray[key]
			loggedInUsersArray.map(function (userDetails) {
				if (row.userId == userDetails.userId) {
					loggedIn = true
					socketId = userDetails.id
				}
			})
			var name = row.firstName + ' ' + row.lastName
			var userInfo = {
				'socketId' : socketId,
				'name' : name,
				'userId': row.userId,
				'unreadCounter' : 0,
				'loggedInStatus' : loggedIn
			}
			searchUsersList.push(
				<user>
					<userSection style = {style.userSection} onClick={this.setSelectedUserDetails.bind(this, userInfo)}> 
						<userImg style = {style.userImg}> 
							<img src="http://localhost/img/userImg05.png"/>
							{ loggedIn == true ?
								<span style = {style.onlinecircel}> 
									<img src="http://localhost/img/online-arrow.png" style={style.onlineimg}/>
								</span> : ''
							}
						</userImg>
						<user style = {style.user}>
							<userh1 style = {[style.userh1, style.displayBlock]}>{name}</userh1>
							<userh2 style = {style.userh2}>Lorem ipsum dolor sit amet ...</userh2>
						</user>
					</userSection>
					<divider style = {[style.divider, style.displayBlock]}>  </divider>
				</user>
			)
		}
		
		var date = new Date()
		var hours = date.getHours()
		var minutes = date.getMinutes()
		var ampm = hours >= 12 ? 'PM' : 'AM'
		hours = hours % 12
		hours = hours ? hours : 12
		minutes = minutes < 10 ? '0'+minutes : minutes
		var msgTime = hours + ':' + minutes + ' ' + ampm
		var prevMassages = allChatsWithUserArray.map(function(msg){
			var message = ''
			if (msg.message == null || msg.message == 'null' || msg.message == '') {
				var fileTypeIcon
				if ((msg.fileType == 'image/jpeg') || (msg.fileType == 'image/png')) {
					fileTypeIcon = "http://localhost/img/jpgfile.png"
				} else if (msg.fileType == 'application/pdf') {
					fileTypeIcon = "http://localhost/img/pdffile.png"
				} else {
					fileTypeIcon = "http://localhost/img/xlsfile.png"
				}
				message = <fileSection>
						<uploadFile style={style.uploadFile}> <img src={fileTypeIcon} /></uploadFile>
						<fileFormat style={style.fileFormat}>
							<fileName style={msg.senderSocketId == msg.recieverSocketId ? style.senderFileName : style.reciverFileName}>{msg.fileName}  </fileName>
							<a style={style.downloadBtn} href={msg.attachment} download={msg.fileName}> Download </a>
						</fileFormat>
					</fileSection>					
			} else {
				message = msg.message
			}
			return 	<messageSection>
				<messageArea style={[style.displayBlock, msg.from_user_id == loggedInUserId ? style.sender : style.reciver]}> 
					<chatText style={[style.span, msg.from_user_id == loggedInUserId ? style.right : style.left]}>
						{message}<span style={msg.from_user_id == loggedInUserId ? style.arrorIconRight : style.arrorIconLeft}> </span>
					</chatText> <clearClass style = {[style.clear, style.displayBlock]}></clearClass>
					<time style={[style.displayBlock, msg.from_user_id == loggedInUserId ? style.messageTimeright : style.messageTimeleft]}>
						{msgTime}
					</time>
				</messageArea>
				<clearClass style = {[style.clear, style.displayBlock]}></clearClass>
			</messageSection>
		})
		var massages = messagesArray.map(function(msg) {
			var message = ''
			if (msg.file) {
				var fileTypeIcon
				if ((msg.fileType == 'image/jpeg') || (msg.fileType == 'image/png')) {
					fileTypeIcon = "http://localhost/img/jpgfile.png"
				} else if (msg.fileType == 'application/pdf') {
					fileTypeIcon = "http://localhost/img/pdffile.png"
				} else {
					fileTypeIcon = "http://localhost/img/xlsfile.png"
				}
				message = <fileSection>
					<uploadFile style={style.uploadFile}> <img src={fileTypeIcon} /></uploadFile>
					<fileFormat style={style.fileFormat}>
					<fileName style={msg.senderSocketId == msg.recieverSocketId ? style.senderFileName : style.reciverFileName}>{msg.fileName}  </fileName>
					<a style={style.downloadBtn} href={msg.file} download={msg.fileName}> Download </a>
					</fileFormat>
					</fileSection>					
			} else {
				message = msg.message
			}
			return 	<messageSection>
				<messageArea style={[style.displayBlock, msg.senderSocketId == msg.recieverSocketId ? style.sender : style.reciver]}> 
					<chatText style={[style.span, msg.senderSocketId == msg.recieverSocketId ? style.right : style.left]}>
						{message}<span style={msg.senderSocketId == msg.recieverSocketId ? style.arrorIconRight : style.arrorIconLeft}> </span>
					</chatText>
					<clearClass style = {[style.clear, style.displayBlock]}></clearClass>
					<time style={[style.displayBlock, msg.senderSocketId == msg.recieverSocketId ? style.messageTimeright : style.messageTimeleft]}>
						{msgTime}
					</time>
					
				</messageArea><clearClass style = {[style.clear, style.displayBlock]}></clearClass>
			</messageSection>
		})
		if ((recentChatUsers.length == 0) && (massages.length == 0)) {
			massages = <chatMessage style={style.chatMessage}> You have no recent conversation. </chatMessage>
		}
    return (  
<wraper>
    <chat  style = {style.chat} data-role="page" id="pageone"> 
        <chatHeader style = {[style.chatHeader, style.displayBlock]} data-role="main">
            <pic style = {style.pic} > <img src="http://localhost/img/profilePic.png"/>  </pic>
            <userName style = {style.userName} >
                <userNameheading style = {style.userNameheading} > {self.state.selectedUserName} </userNameheading>
                <userNamesubheading style = {[style.userNamesubheading, style.displayBlock]} > <typingMessage style={style.typeinput}>{self.state.notifyUserMessage =='' ? self.state.loggedInStatus == true ? 'Online': 'Offline' : self.state.notifyUserMessage}</typingMessage> </userNamesubheading>
            </userName>
            <onclickIcon style = {style.onclickIcon} > <a href="#pagetwo" data-transition="slide"><img src="http://localhost/img/onclick-icon.png"/> </a></onclickIcon> 
        </chatHeader>
        <chatBody style = {style.chatBody} > 
			{prevMassages}
			{massages}
            <messagebox style = {[style.messagebox, style.displayBlock]}>
				<form ref='form' enctype="multipart/form-data">
					<upload style = {style.upload}>
						<FormInput type ='file' customStyle = {[style.input, style.displayBlock]} onChange={(e) =>  { this.open() }} ref='file' />
					</upload>
					<textbox>
						<FormTextarea customStyle={style.textbox} value={form.data.message} onChange={(e) => { this.setFieldValue('message', e) }}/>
						<button style={style.sendArrow} onClick={(e) => { this.submit(e) }}><img src="http://localhost/img/messageSendIcon.png"/></button> 
					</textbox>
				</form>
			</messagebox>
        </chatBody>
    </chat>
	
    <onlineUsers style = {style.onlineUsers} >
        <usersChatHeader style = {[style.UsersChatHeader, style.displayBlock]} >
            <usersSearchBox style = {style.usersSearchBox}>
				<FormInput customStyle = {style.usersSearch} value={form.data.searchBox} placeholder="Search" ref='search' onChange={(e) => { this.setFieldValue('searchBox', e) }}/>
			</usersSearchBox>
        </usersChatHeader>
        <userChatBody style = {style.UserChatBody}>
			{recentChatUsers}
			{searchUsersList}
        </userChatBody>
    </onlineUsers>
	
	<Modal bsSize = 'md' show={this.state.showModal} onHide={this.close} style={style.modalBox}>
		<modalBg> <Modal.Header closeButton onClick={(e) => { this.close() }}  >
			<Modal.Title>File Upload</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.state.confirmMessage}
			</Modal.Body>
			<Modal.Footer>
			<Button onClick={(e) => { this.handleFileChange() }} style={style.greenBtn} >Ok</Button>
			<Button onClick={(e) => { this.close() }}>Close</Button>
			</Modal.Footer>
		</modalBg>
	</Modal>
</wraper>
    )
  }
}

MobileChat.propTypes = {
}

function mapStateToProps(state) {
  return {
	session: state.session,
	form: state.chatBox,
	users: state.users
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(MobileChat))
