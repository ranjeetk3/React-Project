import Radium from 'radium'

const style = {
	displayBlock: {
		display:'block'
	},
    chat: {
        background:'#fff',
        width:'100%'
    },
    chatHeader: {
        background:'#1d94ed',
        height: '60px'
    },
    onlineUser: {
        background:'#fff',
        width:'100%'
    },
    UsersChatHeader: {
        background:'#1d94ed',
        height: '60px'
    },
    usersSearchBox: {
        width:'100%',
        float:'left',
		'@media only screen and (min-width:480px) and (max-width:767px)':
		{
			width: '96%',
			float: 'left'
		}
    },
    usersSearch: {
        borderRadius:'20%', 
        width:'95%', 
        padding: '5px',
        border: '1px solid #6f6198',
        borderRadius: '15px', 
        margin: '15px 9px', 	
        background:'#fff url(http://localhost/img/userssearchbox.png)right no-repeat scroll', 
        backgroundPosition: '5%',
        backgroundSize: 'auto 60%',
        paddingLeft:'33px', 
        color:'#363636', 
        fontWeight:'600',
		'@media only screen and (min-width:480px) and (max-width:767px)':
		{
			borderRadius: '20%',
			width: '100%',
			padding: '5px',
			border: '1px solid #6f6198',
			borderRadius: '15px',
			margin: '15px 10px',
			background: '#fff url(http://localhost/img/userssearchbox.png)right no-repeat scroll',
			backgroundPosition: '2%',
			backgroundSize: 'auto 60%',
			paddingLeft: '33px',
			color: '#363636',
			fontWeight: '600'
		}
    },
    pic: {
        margin:'5px 10px', 
        float:'left'
    },
    userName: {
        width:'53%',
        float:'left',  
        margin:'5px 10px'
    },
    userNameheading: {
        fontSize:'18px', 
        color:'#fff'
    },
    userNamesubheading: {
        fontSize:'14px',  
        color:'#fff'
    },
    onclickIcon: {
        width:'auto',
        float:'right', 
        right:'10px', 
        margin:'10px 10px',
        cursor:'pointer'
    },
    onclickUserIcon: {
        width:'auto',
        float:'left', 
        left:'10px', 
        margin:'10px 10px',
        cursor:'pointer'
    },
    user: {
        float:'left', 
        width:'68%', 
        margin:'12px 12px' 
    },
    userh1: {
        fontSize:'18px',
        color:'#363636',
        textAlign:'left'
    },
    userh2: {
        fontSize:'14px', 
        color:'#363636', 
        textAlign:'left'
    },
    userImg: {
        width:'auto', 
        float:'left',
        margin:'6px 0px'
    },
    userSection: {
        display:'inline-block',
        width:'100%', 
        cursor:'pointer',
        position:'relative'
    },
    chatBody: {
        background:'#fff',
        width:'100%',
        height:'568px', 
        overflow:'auto',
        padding: '10px 16px', 
        display:'inline-block'
    }, 
    UserChatBody: {
        background:'#fff', 
        height:'568px', 
        overflow:'auto', 
        width:'100%', 
        padding: '0px 16px',
        display:'inline-block'
    }, 
    messageTimeleft: {
        color:'#9584c4', 
        textAlign:'left', 
        fontSize:'12px', 
        margin:'5px 0px'
    },
    messageTimeright: {
        color:'#9584c4',
        fontSize:'12px', 
        textAlign:'right', 
        margin:'5px 0px'
    },
    messagebox: {
        background:'#fff',
        padding:'10px 0px', 
        borderTop:'#f3f3f3 solid 1px',
		position:'fixed',
		bottom:'0px',
		width:'100%',
		left:'0px',
		right:'0px'
    },
    textbox: {
        width:'79%',
        float:'left',
        border:'0px',
        height:'42px', 
        margin:'0px 8px', 
        color:'#8f8497',
		border:'rgb(54, 54, 54) solid 1px' 
    },
    sendArrow: {
        width:'7%', 
        float:'left', 
        margin: '12px 0px', 
        cursor:'pointer',
		border: '0px',
        background: 'none'
    },
    divider: {
        background:'#e2dfea',
        height:'1px', 
        width:'95%',
        margin:'0 auto'
    },
    onlinecircel: {
        background: '#2ecb70',
        width: '13px',
        height: '13px',
        borderRadius: '50%',
        position: 'absolute',
        top: '47px',
        left: '43px',
        color:'#fff',
        textAlign:'center'
    },
    onlinecircelImg: {
        paddingBottom:'8px'
    },
    span: {
        display: 'inline-block',
        maxWidth: '100%',
        backgroundColor: '#f5f7fa',
        padding: '5px',
        borderRadius: '4px',
        position: 'relative'
    },
    left: {
        float: 'left',
        padding: '10px 10px'
    },
	right: {
		float: 'right',
		backgroundColor: '#269bf3',
		color:'#fff',
		padding: '10px 10px'
	},
    spanLeftAfter: {
        content: '',
        display: 'inline-block',
        position: 'absolute',
        left: '-8.5px',
        top: '7px',
        height: '0px',
        width: '0px',
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderRight: '8px solid f5f7fa'
    },
    spanLeftBefore: {
        content: '',
        display: 'inline-block',
        position: 'absolute',
        left: '-7px',
        top: '7px',
        height: '0px',
        width: '0px',
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderRight: '8px solid #f5f7fa'
    },
    spanRightAfter: {
        content: '',
        display: 'inline-block',
        position: 'absolute',
        right: '-7px',
        top: '6px',
        height: '0px',
        width: '0px',
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '8px solid #269bf3'
    },
    spanRightBefore: {
        content: '',
        display: 'inline-block',
        position: 'absolute',
        right: '-8px',
        top: '6px',
        height: '0px',
        width: '0px',
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '8px solid #269bf3' 
    },
    spanRight: {
        float: 'right',
        backgroundColor: '#269bf3',
        color:'#fff',
        padding: '10px 10px' 
    },
    clear: {
        clear: 'both'
    },   
    sender: {
        margin:'20px 5px'
    }, 
    reciver: {
        margin:'20px 5px'
    },
    active: {
        backgroundColor:'yellow',
        color:'white'
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
		position: 'absolute',
        right: '0px'
	},
	input : {
		display: 'block',
		width: '18px',
		height: '20px',
		opacity: '0',
		overflow: 'hidden',
		padding: '20px 1px'
	},
	upload : {
		width: '20px',
		height: '36px',
		background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/attachmenticon.png)no-repeat',
		backgroundPosition:'57% 65%',
		overflow: 'hidden',
		display:'block',
		float:'left'
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
		color:'#666',
		display:'block',
		width: '80px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		textAlign:'left'
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
	modalBox: {
		marginTop:'200px 0px'
	},
	
	onlineimg : {
	paddingBottom:'8px'
	
	},
	
   arrorIconRight : {
    display: 'inline-block',
	position: 'absolute',
	right: '-7px',
	top: '3px',
	height: '0px',
	width: '0px',
	borderTop: '8px solid transparent',
	borderBottom: '8px solid transparent',
	borderLeft: '8px solid #269bf3'
   },
   
   arrorIconLeft : {
    display: 'inline-block',
	position: 'absolute',
	left: '-7px',
	top: '3px',
	height: '0px',
	width: '0px',
	borderTop: '8px solid transparent',
	borderBottom: '8px solid transparent',
	borderRight: '8px solid rgb(245, 247, 250)'
}
}
export default style
