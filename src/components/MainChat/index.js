// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'

// style
import style from './style.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'socket.io/lib/socket.js'

// components
import Form from '../Form'
import MainMessenger from '../MainMessenger'
import MobileChat from '../MobileChat'
// exports
export class MainChat extends Form {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<chat>
				<mainChatWrapper style={style.mainChatWrapper}>
					<MainMessenger/>
				</mainChatWrapper>
				<mobileChatWrapper style={style.mobileChatWrapper}>
					<MobileChat/>
				</mobileChatWrapper>
			</chat>
		)
	}
}

MainChat.propTypes = {
}

function mapStateToProps(state) {
	return {
		session: state.session
	}
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(MainChat))
