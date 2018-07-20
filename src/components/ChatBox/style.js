import Radium from 'radium'

const style = {
	displayBlock: {
		display:'block'
	},
	contentTop: {
		marginTop:'30px'
	},
	contentSectionMiddle :{
	 width: '76%',
		'@media screen and (max-width:767px)': {
     width:'100%',
		 marginRight: '0px',
		 marginTop:'30px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
     width:'66.66666667%',
		 marginRight: '0px',
		 marginTop:'0px'
    },
	},
	marginleft20:{
		marginLeft:'20px',
		'@media screen and (max-width:767px)': {
		marginLeft: '0px'
		},
    '@media screen and (min-width:768px) and (max-width:1024px)': {
		marginLeft: '0px'
		},
    
	},
	box: {
		background:'#fff',
		height:'auto',
		color:'#b5b5b5',
		fontSize:'14px',
		border:'#e6eaee solid 1px',
		borderRadius:'4px',
		display:'block',
		'@media screen and (max-width:767px)': {
     marginLeft:'0px',
     width:'100%'
    }
	},
	boxBottomLine: {
		borderBottom: '#e6eaee solid 1px',
		padding:'12px',
		display:'flex'
	},
	boxTextIcon: {
		width:'40px', 
		backgroundColor:'#e8eaf1',
		borderRadius:'3px',
		padding:'20px 0px 20px 0px',
    ':hover' :{
      backgroundColor:'#1d84d1'
    }
	},
  boxText:{
    width:'260px',
    color:'#000',
    textDecoration:'none',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: '600',
    ':hover': {
      color: '#ccc',
      textDecoration: 'none'
    }
  },
boxWrapper: {
 marginLeft:'20px'
},
	contentSection :{
		margin:'0px 0px',
		display:'block',
    minHeight:'920px'
	},
	pastInvoiceIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfile.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
    ':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfileActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activePastInvoiceIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfileActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	billingIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClock.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
    ':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClockActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeBillingIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClockActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	companyHierarchyIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverview.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverviewActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeCompanyHierarchyIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverviewActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	softwareOptionsIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocument.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocumentActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeSoftwareOptionsIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocumentActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
  userSettingIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenter.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenterActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeUserSettingIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenterActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	wrapper:{
		background: '#eff3f6'
	},
    clockWrapper: {
      width: '100%',
      float: 'left',
      background: '#ffffff',
      borderRadius: '3px',
      border: '#e6eaee solid 1px',
      margin: '0px 0px',
      '@media screen and (max-width:767px)': {
        paddingRight: '15px',
        paddingLeft: '15px',
        marginTop: '30px',
      },
      '@media screen and (min-width:768px) and (max-width:980px)': {
        marginTop: '30px',
      }
    },
    h1:{
      fontSize: '24px',
      margin: '26px 26px',
			display:'block',
      '@media screen and (max-width:767px)': {
        fontSize: '24px',
        textAlign: 'center',
        margin: '20px 0px 0px 0px'
      },
      '@media screen and (min-width:767px) and (max-width:1024px) ': {
        margin: '26px 10px',
      }
      
    },
    h2: {
      fontSize: '18px',
      margin: '10px 0px',
      fontWeight: '600',
			display:'block',
    },
    innerbg: {
      width: '410px',
      background: '#fcfcfc',
      margin: '20px 20px',
      borderRadius: '3px',
      border: '#e6eaee solid 1px',
      height: 'auto',
      '@media screen and (max-width:767px)': {
        width: '100%',
        margin: '20px 0px',
        display:'block',
      },
      '@media screen and (min-width:768px) and (max-width:980px) ': {
        width: '100%',
        margin: '20px 0px'
      },
      '@media screen and (min-width:981px) and (max-width:1024px) ': {
        width: '100%',
        margin: '20px 0px'
      }
    },
	clr: {
		clear: 'both',
		display : 'block'
	}, 
  pullRight: {
    '@media screen and (max-width:767px)': {
      textAlign: 'center'
    },
    '@media screen and (max-width:640px)': {
      textAlign: 'center'
    },
  },
  softwareright: {
    width: '455px',
    float: 'left',
    background: '#fff',
    borderRadius: '3px',
    border: '#e6eaee solid 1px',
    '@media screen and (max-width:767px)': {
      marginLeft: '0px',
      width: '100%',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginTop: '30px'
    },
    '@media screen and (min-width:768px) and (max-width:979px)': {
      width:'100%',
      padding: '0px 20px',
      marginTop: '30px'
    },
  },
  softwareWrapper: {
    padding: '0px 0px 0px 25px',
    '@media screen and (max-width:767px)': {
      paddingLeft: '0px',
      paddingRight: '0px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
      paddingLeft: '0px',
      paddingRight: '0px'
    },
  },
  sotwaretext: {
    height: '48px',
    fontSize: '14px',
    padding: '0px 10px'
  },
  col80: {
    width: '80%',
    float: 'left',
    padding: '15px 10px 10px 5px',
    color: '#414f64',
    fontWeight: '600',
    '@media screen and (max-width:767px)': {
      width: '70%'
    },
    '@media screen and (min-width:768px) and (max-width:980px)': {
      width: '75%'
    }
  },
  col15: {
    width: '15%',
    float: 'left',
    '@media screen and (max-width:767px)': {
      width: '25%'
    },
    '@media screen and (min-width:768px) and (max-width:980px)': {
      width: '20%'
    }
  },
  pullRight: {
    '@media screen and (max-width:767px)': {
      textAlign: 'center'
    },
    '@media screen and (max-width:640px)': {
      textAlign: 'center'
    }
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    WebkitTransition: '.4s',
    transition: '.4s'
  },
  round: {
    borderRadius: '34px',
  },
  sliderBefore: {
    position: 'absolute',
    content: '\'\'',
    height: '16px',
    width: '16px',
    left: '4px',
    bottom: '4px',
    backgroundColor: 'white',
    WebkitTransition: '.4s',
    transition: '.4s',
    borderRadius: '100%'
  },
  checked: {
    backgroundColor: '#73c349'
  },
  checkedBefore: {
    WebkitTransform: 'translateX(26px)',
    MsTransform: 'translateX(26px)',
    transform: 'translateX(26px)'
  },
  whitebg: {
    background: '#ffffff',
    borderTop: '#e6eaee solid 1px',
    borderBottom: '#e6eaee solid 1px'
  },
  greenBtn : {
    marginBottom: '0px',
    fontSize: '14px',
    fontWeight: '400',
    color: '#FFF',
    lineHeight: '1.42857',
    textAlign: 'center',
    background: '#39b54a',
    background: '-moz-linear-gradient(top, #39b54a 0%, #33aa44 100%, #207cca 100%, #33aa44 100%, #33aa44 100%)',
    background: '-webkit-linear-gradient(top, #39b54a 0%,#33aa44 100%,#207cca 100%,#33aa44 100%,#33aa44 100%)',
    background: 'linear-gradient(to bottom, #39b54a 0%,#33aa44 100%,#207cca 100%,#33aa44 100%,#33aa44 100%)',
    cursor: 'pointer',
    borderRadius: '3px',
    border: '#249533 solid 1px',
    textDecoration: 'none',
    padding: '6px 20px',
    '@media screen and (max-width:1024px)': {
       marginRight:'0px'
    },
  },
  
  modalBox: {
    marginTop:'200px 0px'
  },
  
  padding0: {
    paddingLeft: '0px',
	paddingRight: '0px',
  },
  topBlueBg: {
    background: '#2198f0',
    padding: '5px 0px',
    margin: '-40px 0px 0px 0px',
    color: '#fff',
    fontSize: '15px',
    borderRadius: '5px 5px 0px 0px',
    display: 'inline-block',
    position: 'relative'
  },
  username: {
    color: '#fff',
    fontSize: '14px',
	paddignTop:'5px',
    
	'@media screen and (max-width:767px)': {
		fontSize: '14px'
    }
  },
  chatRight: {
	position: 'fixed',
	right: '20px',
	float: 'right',
	bottom: '0',
	width: '64%',
	'@media screen and (max-width:767px)': {
		maxWidth: '767px',
    },
    '@media screen and (min-width:981px) and (max-width:1024px)': {
     width: '85%',
    },
	'@media screen and (min-width:768px) and (max-width:980px)': {
     width: '65%'
    }
  },
  chatBox: {
	paddingLeft: '0px',
	paddingRight: '0px',
	position : 'relative'
  },
  rightAlign: {
    textAlign: 'right',
  },
  showBtn: {
	background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/plus.png)no-repeat',
	
  },
  hideBtn: {
	background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/minus.png)no-repeat',
	paddingTop:'10px'
	
  },
  actionIcon: {
	float: 'left',
	width: '20px',
	height: '20px',
	cursor: 'pointer',
	marginTop: '10px',
    marginLeft: '20px',
'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft: '30px'
    }
  },
  chat: {
	width: '100%',
  },
  showChatBox: {
	display:'block'
  },
  hideChatBox: {
	display:'none'
  },
  displayNone: {
	display:'none'
  },
  chatContentWrapper: {
	margin: '0px 0px 0px 0px',
	paddingLeft: '0px',
	background:'#fff',
	display: 'inline-block'
  },
  chatRow: {
	marginRight: '-10px',
	marginLeft:'1px'
  },
  chatContentpanelLeft: {
	margin: '0px 0px',
	display: 'inline-block'
  },
  
  
  profilePicLeft: {
	height: '40px',
	float: 'left',
	'@media screen and (max-width:767px)': {
		width: '100%',
		height: '40px',
		float: 'left',
		textAlign: 'center',
		marginBottom: '10px'
    }
  },
  
    profilePicRight: {
	height: '40px',
	float: 'right',
	'@media screen and (max-width:767px)': {
		width: '100%',
		height: '40px',
		float: 'left',
		textAlign: 'center',
		marginBottom: '10px'
    }
  },
  chatContentLeft: {
	float: 'left',
	fontSize: '13px',
	color: '#7f8fa4',
	margin: '0px 0px',
	lineHeight: '16px',
	textAlign: 'justify',
	'@media screen and (max-width:767px)': {
		textAlign: 'center'
	}
  },
  
   chatContentLeft: {
	float: 'right',
	fontSize: '13px',
	color: '#7f8fa4',
	margin: '0px 0px',
	lineHeight: '16px',
	textAlign: 'justify',
	'@media screen and (max-width:767px)': {
		textAlign: 'center'
	}
  },
  divider: {
	borderTop: '#f5f5f5 solid 1px',
	height: '1px'
  },
  attachmentBg: {
	width: '100%',
	padding: '5px 10px',
	background: '#f1f3f9 url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/attachmenticon.png)',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '2%',
	backgroundSize: 'auto 46%',
	border: '#ebebfc solid 1px',
	paddingLeft: '30px',
	display: 'inline-block'
  },
  attachcross: {
	color: '#aab5c4',
	fontSize: '16px',
	fontWeight: '600'
  },
  onlineSection: {
	boxShadow: '-3px 1px 4px -3px #eaeaea',
	height: '282px',
	background: '#fff',
	display: 'inline-block'
  },
  memberList: {
	width: '100%',
    position:'relative',
	float: 'left',
	padding: '6px 0px',
	borderBottom: '#f5f5f5 solid 1px',
	cursor:'pointer'
  },
  onlinePic: {
	width: '30px',
	height: '30px',
	float: 'left',
	margin: '5px 0px 5px 5px',
	'@media screen and (max-width:767px)': {
		marginLeft: '10px'
    },
	'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft: '10px'
    }
  },
  onlineHeading: {
	float: 'left',
	fontSize: '12px',
	color: '#7f8fa4',
	margin: '10px 0px 10px 8px',
    whiteSpace: 'nowrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '52%'
  },
  
    onlineCircle: {
    position:'absolute',
	borderRadius: '100px',
	fontSize: '11px',
	lineHeight: '20px',
	right: '0px',
	background: '#39b54a none repeat scroll 0% 0%',
    border:'#fff solid 2px',
	width: '12px',
	height: '12px',
    left: '25px',
    top : '31px'
  },
  
  messageCircle: {
	borderRadius: '100px',
	textAlign: 'center',
	fontWeight: 'normal',
	fontSize: '11px',
	lineHeight: '20px',
	right: '0px',
	background: '#FF7800 none repeat scroll 0% 0%',
	color: '#FFF',
	width: '20px',
	height: '20px',
	float: 'right',
	marginTop: '10px',
    marginRight: '5px'
  },
  active: {
	background: '#f1f3f9'
  },
  h4: {
	fontSize:'13px',
	marginTop:'0',
	marginBottom:'5px',
	color: '#7f8fa4',
	fontWeight:'600',
	display:'block'
  },
  
  cross : {
	float: 'left',
	background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/cross.png)no-repeat',
	backgroundPosition: '0px',
	width: '20px',
	height: '20px',
	cursor: 'pointer',
	paddingTop: '26px',
	paddingRight: '10px',
	marginLeft: '10px'
},
messageBg: {
	background: '#f1f3f9',
	padding: '10px 0px',
    width:'100%',
	bottom: '0px',
	right: '0px',
	'@media screen and (max-width:767px)': {
		margin: '10px 0px 0px 0px'
	}
},

messageBgSearch: {
	background: '#f1f3f9',
	padding: '10px 0px',
	boxShadow: 'rgb(234, 234, 234) -3px 1px 4px -3px',
    width:'100%',
	bottom: '0px',
	right: '0px',
	'@media screen and (max-width:767px)': {
		margin: '10px 0px 0px 0px'
	}
},

textarea: {
	width: '79%',
	padding: '5px 5px',
	borderRadius: '5px',
    border:'1px solid rgb(204, 204, 204)',
	height:'40px',
	overflow:'hidden',
    marginTop:'3px',
 '@media screen and (min-width:768px) and (max-width:1024px)': {
     width: '62%',
	 }
},

col60 : {
    width: '60%',
	float:'left'
	},
	
col40 : {
    width: '40%',
    float:'right'	
},

col100 : {
    width: '100%',
    float: 'left',
	color: '#7f8fa4',
	textAlign: 'left',
},

timeTextRight : {
   fontSize:'11px',
    width:'100%',
   textAlign:'left',
    marginTop:'3px',
   color: '#7f8fa4',
   float:'right'
},


timeTextLeft : {
   fontSize:'11px',
   width:'100%',
   textAlign:'right',
   marginTop:'3px',
   color: '#7f8fa4',
   float: 'left'
},


paddingRight : {
    paddingRight: '0px'
},

teamMember : {
    fontSize: '13px',
	color : '#fff',
	paddingLeft: '25px',
	paddingTop:'5px',
 '@media screen and (min-width:768px) and (max-width:1024px)': {
     paddingLeft: '8px'
	 }
},

scroll : {
    height: '280px',
	overflowY: 'auto',
	display : 'block'
},

greenbButton : {
    background:'rgb(115, 195, 73)',
	padding:'5px 8px',
	color: '#fff',
	marginTop:'10px',
	fontSize:'12px',
	border: 'none',
	borderRadius: '3px'
},

userheading : {
    paddingTop:'3px'	
},

sendButton : {
    marginTop:'14px',
	border: '0px',
	background:'none',
    outline: 'none',
	paddingLeft:'0px',
	paddingRight:'0px',
	marginRight:'5px'
},


upload : {
	width: '20px',
	height: '36px',
	background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/attachmenticon.png)no-repeat',
	backgroundPosition:'57% 89%',
	overflow: 'hidden',
	display:'block',
},

input : {
	display: 'block',
	width: '18px',
	height: '20px',
	opacity: '0',
	overflow: 'hidden',
	padding: '20px 1px'
},

sendIcon : {
    width: '25px',
	height: '23px',
	display: 'block',
	outline: 'none',
	paddingLeft:'0px',
	paddingRight:'0px'
	},
    
marginTop : { 
    marginTop : '15px'
    },
 
memberScroll : {
    height: '265px',
	overflowY: 'auto',
	display : 'block'
},

active : {
    background : 'rgb(241, 243, 249)'

},

searchInput : {
    fontSize: '14px',
    background: '#fff url(http://localhost/img/searchbox.png) no-repeat',
    backgroundPosition: '4% 50%',
    boxShadow : 'none',
    border: '1px solid rgb(204, 204, 204)',
    borderRadius: '3px',
    transition: 'border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s',
    width: '91%',
    margin:'O auto',
    display: 'block',
    height: '30px',
    margin : '7px 0px 6px 6px',
    padding: '2px 0px 2px 25px'
    },
	sender: {
		background:'#259AF2',
		padding:'6px 6px',
		textAlign:'left',
		borderRadius:'4px 12px 0px',
		color:'#fff',
		width:'auto',
		float:'right',
	},
	
		reciver: {
		background:'#f5f7fa',
	    width:'auto',
		float:'left',
		padding:'6px 6px',
		borderRadius:'4px',
		textAlign:'left',
		borderRadius:'4px 12px 0px',
		color:'#999',
	},
	chatMessage : {
		fontSize:'14px',
		color:'#cccccc',
		fontWeight:'600',
		margin:'115px 10px',
		display : 'block',
		textAlign : 'center'
    },
	uploadFile:{
		width:'50%',
		float:'left'
	},
	fileFormat: {
		width: '40%',
		float: 'left',
		color: '#fff',
		textAlign: 'center',
		margin: '10px 8px'
	},
	downloadBtn: {
		background: '#2262b1',
		color: '#fff',
		textAlign: 'center',
		width: '100px',
		fontSize: '12px',
		padding: '8px 10px',
		margin: '15px 0px',
		borderRadius: '3px',
		textDecoration:'none'
	},
	senderFileName: {
		margin:'10px 5px',
		color:'#fff',
		display:'block',
		width: '80px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		textAlign:'left'
	},
	reciverFileName: {
		margin:'10px 5px',
		color:'rgb(153, 153, 153)',
		display:'block',
		width: '80px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		textAlign:'left'
	},
	disabled: {
	pointerEvents:'none'
  },
	

}


export default style
