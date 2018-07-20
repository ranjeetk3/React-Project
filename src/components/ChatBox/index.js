// dependencies
"use strict";
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'


// style
import style from './style.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'socket.io/lib/socket.js'


import Form from '../Form'
import FormInput from '../FormInput'
import FormTextarea from '../FormTextarea'
import { Col, Button, Modal} from 'react-bootstrap'


// exports
var loggedInUserId
var searchUsersList = []
var messageCounterArray = []
var sortedPriviouseUsers = []
export class ChatBox extends Form {
	constructor(props) {
		super(props)
		this.state = {currentStatus:0, messages:[], loggedinUsers:[], socket:window.io('http://localhost:3000'), socketId:'', userId:'', selectedUserName:'', selectUserId:'', searchUser:0,
		showModal: false, confirmMessage:''}
		this.setSocketId = this.setSelectedUserDetails.bind(this)
	}
	setFieldValue(field, e) {
		const { chatBox, dispatch, session } = this.props
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
							loginToken: session.loginTokenDetails.token
						}
					}
				})
			} else {
				dispatch({
					type: 'RESET_SEARCH_RESULT'
				})
			}
		}
		e.preventDefault()
	}
	changeAction(e) {
		this.setState({currentStatus:!this.state.currentStatus})
	}
	componentDidMount() {
		const { session, dispatch, chatBox } = this.props
		var self = this
		loggedInUserId = session.loginTokenDetails.id
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
	
	open() {
		var self = this
		var file = findDOMNode(this.refs.file).files[0]
		self.setState({ showModal: true, confirmMessage:'You uploaded ' + file.name + ' file.Are you sure you want to upload?' })
	}
	submit(e) {
		const { chatBox, dispatch, session } = this.props
		e.preventDefault()
		var messageData = {
			senderId:loggedInUserId,
			recieverId:this.state.selectUserId,
			socketId:this.state.socketId,
			message:chatBox.data.message,
			loginToken: session.loginTokenDetails.token
		}
		
		findDOMNode(this.refs.form).reset()
	}
	
	setSelectedUserDetails(userInfo, e) {
		const { dispatch } = this.props
		var self = this
		this.setState({socketId:userInfo.socketId, selectedUserName:userInfo.name, selectUserId:userInfo.userId, messages:[]})
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
					loginToken: session.loginTokenDetails.token,
				}
			}
		})
		if (userInfo.unreadCounter > 0) {
			var userDetails = {
				fromUser:userInfo.userId,
				loginToken:session.loginTokenDetails.token
			}
			

			
		}
	}
	getAllChatsUsers() {
		const { dispatch, session } = this.props
		dispatch({
			type: 'GET_RECENT_CHAT_USERS',
			payload: {
				id: session.loginTokenDetails.token,
			}
		})
	}
	
	handleFileChange() {
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
				type:file.type,
				loginToken: session.loginTokenDetails.token
			}
			
		}

		reader.readAsDataURL(file)
		this.close()
  }
  render() {
	var self = this
	const { chatBox, registrationForm } = self.props
	
	var recentChatUsersArray = chatBox.recentChatUsers
	var searchUsersArray = chatBox.searchUsersList
	var loggedInUsersArray = self.state.loggedinUsers
	var allChatsWithUserArray = chatBox.allChatsWithUser
	var messagesArray = self.state.messages
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
			'unreadCounter' : unreadCount
		}
		recentChatUsers.push(<members>
			<memberList style={style.memberList} onClick={this.setSelectedUserDetails.bind(this, userInfo)} key={socketId}>
				<memberPic style={style.onlinePic}><img src="http://localhost/img/corry.png" className="img-responsive" />{ loggedIn == true ? <span style={style.onlineCircle}> </span> :'' } </memberPic>
				<message style={style.onlineHeading}> {row.name} </message>
				{unreadCount != '' ? <onlibeCircle> <span style={style.messageCircle}> {unreadCount}</span> </onlibeCircle> : ''}
			</memberList>
		</members>)
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
			'name' : row.firstName + ' ' + row.lastName,
			'userId': row.userId,
			'unreadCounter' : 0
		}
		searchUsersList.push(<members>
			<memberList style={style.memberList} onClick={this.setSelectedUserDetails.bind(this, userInfo)} key={socketId} id={row.userId}>
				<memberPic style={style.onlinePic}><img src="http://localhost/img/corry.png" className="img-responsive" />{ loggedIn == true ? <span style={style.onlineCircle}> </span> :'' } </memberPic>
				<message style={style.onlineHeading}> {row.firstName + ' ' + row.lastName} </message>
			</memberList>
		</members>)
	}
	var date = new Date()
	var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    var msgTime = hours + ':' + minutes + ' ' + ampm
	
	var prevMassages = allChatsWithUserArray.map(function(msg){
		if ((msg.to_user_id != loggedInUserId) && (msg.status == 0)) {
			var counterKey = msg.to_user_id
			messageCounterArray[{counterKey}] = messageCounterArray[{counterKey}] ? (messageCounterArray[{counterKey}] + 1) : 1
		}
		return 	<messageSection>
			<chatRow className="row" style={style.chatRow }>
				<chatContentpanel className="col-xs-12" style={style.chatContentpanel}> 
					<profilePic className="col-sm-3 col-md-2"  style={msg.from_user_id == loggedInUserId ? style.profilePicRight : style.profilePicLeft}>
						<img src="http://localhost/img/jacqueline-holmes.png" />
					</profilePic> 
					<chatContent className="col-xs-12 col-sm-9 col-md-10" style={[style.chatContent, style.paddingRight]}>	
						<chatText style={[style.col100, msg.from_user_id == loggedInUserId ? style.sender : style.reciver]}>{msg.message}</chatText>
						<chatTime style={[style.col40, msg.from_user_id == loggedInUserId ? style.timeTextLeft : style.timeTextRight]}> 55:89 </chatTime>
					</chatContent>
				</chatContentpanel>
			</chatRow>
			
		</messageSection>
	})
	
	var massages = messagesArray.map(function(msg){
		if (msg.file) {
			var fileTypeIcon
			if ((msg.fileType == 'image/jpeg') || (msg.fileType == 'image/png')) {
				fileTypeIcon = "http://localhost/img/jpgfile.png"
			} else if (msg.fileType == 'application/pdf') {
				fileTypeIcon = "http://localhost/img/pdffile.png"
			} else {
				fileTypeIcon = "http://localhost/img/xlsfile.png"
			}
			return <messageSection>
				<chatRow className="row" style={style.chatRow }>
					<chatContentpanel className="col-xs-12" style={style.chatContentpanel}> 
					<profilePic className="col-sm-3 col-md-2"  style={msg.senderSocketId == msg.recieverSocketId ? style.profilePicRight : style.profilePicLeft}>
						<img src="http://localhost/img/jacqueline-holmes.png" />
					</profilePic>
					<chatContent className="col-xs-12 col-sm-9 col-md-10" style={[style.chatContent, style.paddingRight]}>
					<chatText style={[style.col100, msg.senderSocketId == msg.recieverSocketId ? style.sender : style.reciver]}>
					<uploadFile style={style.uploadFile}> <img src={fileTypeIcon} /></uploadFile>
					<fileFormat style={style.fileFormat}>
						<fileName style={msg.senderSocketId == msg.recieverSocketId ? style.senderFileName : style.reciverFileName}>{msg.fileName}  </fileName>
						<a style={style.downloadBtn} href={msg.file} download={msg.fileName}> Download </a>
					</fileFormat>
					</chatText>
					<chatTime style={[style.col40, msg.senderSocketId == msg.recieverSocketId ? style.timeTextLeft : style.timeTextRight]}> {msgTime} </chatTime>
					</chatContent>
					</chatContentpanel>
				</chatRow>
			</messageSection>
		} else {
			return 	<messageSection>
				<chatRow className="row" style={style.chatRow }>
					<chatContentpanel className="col-xs-12" style={style.chatContentpanel}> 
						<profilePic className="col-sm-3 col-md-2"  style={msg.senderSocketId == msg.recieverSocketId ? style.profilePicRight : style.profilePicLeft}>
							<img src="http://localhost/img/jacqueline-holmes.png" />
						</profilePic> 
						<chatContent className="col-xs-12 col-sm-9 col-md-10" style={[style.chatContent, style.paddingRight]}>
							<chatText style={[style.col100, msg.senderSocketId == msg.recieverSocketId ? style.sender : style.reciver]}>{msg.message}</chatText>
							<chatTime style={[style.col40, msg.senderSocketId == msg.recieverSocketId ? style.timeTextLeft : style.timeTextRight]}> {msgTime} </chatTime>
							
						</chatContent>
					</chatContentpanel>
				</chatRow>
				
			</messageSection>
		}
	})
	if ((recentChatUsers.length == 0) && (massages.length == 0)) {
		massages = <chatMessage style={style.chatMessage}> You have no recent conversation. </chatMessage>
	}
    return (
		<chatRight style = {[style.chatRight, style.displayBlock]} >
			<chatWrapper className="col-xs-12 col-sm-11 col-md-7 pull-right" style={[style.chatBox, style.padding0]}>
				<headerSection className="col-xs-12 col-md-12" style={[style.topBlueBg, style.padding0]}>
					<userNameSection className="col-xs-6 col-sm-7 col-md-7" style={style.userheading}>
						<userName style={style.username}>{this.state.selectedUserName}</userName>
					</userNameSection> 
					<headerRightSection className="col-xs-6 col-sm-5 col-md-5 pull-right" style={style.padding0}>
						<teamMeamber className="col-sm-8 col-md-8 col-md-offset-1" style={style.teamMember}> Team Member </teamMeamber>			
						<actions  style={[style.padding0, style.rightAlign]}> 
							<minimize  style={[this.state.currentStatus == 0 ? style.showBtn : style.hideBtn, style.actionIcon]} onClick={(e) => { this.changeAction(e) }}> </minimize>
						</actions>
					</headerRightSection>
				</headerSection>
				<chatSection style={[style.chat, this.state.currentStatus == 0 ? style.displayNone : style.displayBlock]}>
					<chatContentWrapper className="col-xs-8 col-sm-7 col-md-8" style={[style.chatContentWrapper, style.padding0]}>
						<chatScroll style={style.scroll}>
							{prevMassages}
							{massages}
						</chatScroll>
						<messageBox className="col-sm-12 col-md-12" style={style.messageBg}>
							<form ref='form' enctype="multipart/form-data">
								<upload style = {style.upload} className="col-sm-1 col-md-1">
									<FormInput type ='file' customStyle = {[style.input, style.displayBlock, self.state.selectUserId == '' ? style.disabled : '']} onChange={(e) =>  { this.open() }} ref='file' />
								</upload>
								<FormTextarea customStyle={style.textarea} className="col-sm-9 col-md-9" value={chatBox.data.message} onChange={(e) => { this.setFieldValue('message', e) }}/>
								<button style={[style.sendButton, self.state.selectUserId == '' ? style.disabled : '']} className="col-sm-3 col-md-1 pull-right"  onClick={(e) => { this.submit(e) }}>  <img src="http://localhost/img/arrowIcon.png" style={style.sendIcon} className="img-responsive" />   </button> 
							</form>
						</messageBox>
					</chatContentWrapper>
					<memebersWrapper>
						<members className="col-xs-4 col-sm-5 col-md-4" style={[style.onlineSection, style.padding0]}>
							<chatScroll style={style.memberScroll}>	
								{recentChatUsers}
								{searchUsersList}
							</chatScroll>
							<serachBox className="col-sm-12 col-md-12" style={[style.messageBgSearch, style.marginTop]}>
							<FormInput type ='text' ref='search' customStyle = {[style.searchInput, style.displayBlock]} value={chatBox.data.searchBox} onChange={(e) => { this.setFieldValue('searchBox', e) }}/>
						</serachBox>
						</members>
					</memebersWrapper>
				</chatSection>
			</chatWrapper>
			
			<Modal bsSize = 'md' show={this.state.showModal} onHide={this.close} style={style.modalBox}>
				<modalBg style={style.modalBg}> <Modal.Header closeButton onClick={(e) => { this.close() }}  >
					<Modal.Title style={style.whiteText}>File Upload</Modal.Title>
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
		</chatRight>
	)
  }
}

ChatBox.propTypes = {
}

function mapStateToProps(state) {
	return {
		session: state.session,
		chatBox: state.chatBox
	}
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ChatBox))
