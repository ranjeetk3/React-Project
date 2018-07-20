import Radium from 'radium'

const style = {
	displayBlock: {
		display:'block'
	},
	contentWrapper :{
		'width':'100%'
	},
	wrapper:{
		background:'#eff3f6',
		display: 'inline-block',
		height:'100%',
		width:'100%',
		margin:'0 auto',
        position:'relative'
	},
	contentLeft: {
		background: '#269bf3',
		width: '15%',
		height: '100%',
		position: 'relative',
		zIndex: '100',
		bottom:'0px',
		float: 'left',
		left: '0px',
		color: '#fff',
		boxShadow: '5px 0 5px -6px #888',
        '@media screen and (min-width:768px) and (max-width:980px)': {
			width: '25%',
			minHeight: '151vh'
		}
	},
    
	contentLeftHeading: {
		fontSize:'18px',
		color:'#fff',
		margin:'25px 20px 20px 10px',
		float:'left', 
		width:'100%'
	},
	contentLeftUl: {
		width:'100%',
		padding:'10px 10px',
		listStyle:'none'
	},
	contentLeftUlLi: { 
		fontSize:'16px',
		color:'#fff',
		margin: '1px 20px 15px 2px'
	},
	contentLeftUlLiA: {
		fontSize:'15px', 
		color:'#fff',
		margin:'10px 0px',
		textDecoration:'none',
		'hover': {
			fontSize:'15px',
			color:'#ccc',
			textDecoration:'none'
		}
	},
	divider: {
		background: '#5ab1f3',
		height: '1px',
		width: '90%',
		margin: '0 auto'
	},
	messages: {
		color: '#fff',
		fontSize: '14px',
		float: 'right'
	},
	textmessageBg: {
		background:'#fbf9fd',
		marginTop:'5px', 
		display:'inline-block', 
		width:'100%',
	},

	searchOnlineSection: {
		width: '22%',
		float: 'left',
		background: '#fff',
		padding: '20px 0px 0px 0px',
		boxShadow: '5px 0 5px -6px #888',
		zIndex: '2',
		position: 'relative',
		height: '490px',
          '@media screen and (min-width:768px) and (max-width:980px)': {
			width: '30%',
			height: '476px'
		}
	},
       
	searchbox: {
		width: '90%',
		margin: '10px 10px 30px 14px',
		padding: '5px 5px',
		fontFamily: 'Georgia',
		border: '1px solid #e6eaee',
		background: '#f7f8fa url(http://localhost/img/searchicon.png)right no-repeat scroll',
		borderRadius: '30px',
		marginTop: '10px',
		marginRight: '20px',
		backgroundPosition: '95%',
		backgroundSize: 'auto 71%',
		textAlign: 'left'
	},
	chatList: {
		padding: '0px',
		color: '#fff'
	},
	active: {
		background: '#269bf3',
		borderLeft: '#2164ae solid 4px',
		borderBottom: '#f2f2f3 solid 1px',
		padding: '5px 0px',
		display: 'inline-block',
		width: '100%',
		cursor:'pointer'
	},
	profilePic: {
		margin: '5px 5px',
		float: 'left',
		width: '18%',
		position: 'relative'
	},
	messageStatus: {
		float: 'left',
		width: '60%',
        position:'relative',
		'@media screen and (min-width:768px) and (max-width:980px)': {
			width: '54%',
            margin:'0px 3px 0px 9px'
		}
	},
	chatprofileName: {
		fontSize: '14px',
		float: 'left',
		margin: '10px 0px 0px 0px',
		textAlign: 'left',
		fontWeight: '600',
        position:'relative'
	},
	chatprofilestatus: {
		fontSize: '12px',
		float: 'left',
		color: '#fff',
		margin: '0px',
		textAlign: 'left',
		fontWeight: 'normal'
	},
	blueCircel: {
		width: '5px',
		height: '5px',
		margin: '4px 2px',
		background: '#fff',
		borderRadius: '90%',
		display: 'block',
		float: 'left'
	},
	chatTime: {
		fontSize: '10px',
		float: 'left',
		color: '#fff',
		margin: '0px',
		textAlign: 'left',
		fontWeight: '600',
         '@media screen and (min-width:768px) and (max-width:1024px)': {
			textAlign: 'center'
		}
	},
	whiteChatprofileName: {
		fontSize: '14px',
		color: '#7f8fa4',
		float: 'left',
		margin: '10px 0px 0px 0px',
		textAlign: 'left',
		fontWeight: '600',
		position: 'relative'	
	},
	whitechatprofilestatus: {
		fontSize: '12px',
		float: 'left',
		color: '#c8c8c8',
		margin: '0px',
		textAlign: 'left',
		fontWeight: 'normal'
	},
	whitechatTime: {
		fontSize: '11px',
		float: 'left',
		color: '#c8c8c8',
		margin: '0px',
		textAlign: 'left',
		fontWeight: '600'
	},
	chatSectionTop: {
		margin: '10px 0px',
		borderBottom: '#edeef2 solid 1px',
		padding: '11px 0px 20px 0px',
		display: 'block'
	},
	chatSpan: {
		display: 'inline-block',
		maxWidth: '65%',
		backgroundColor: 'white',
		padding: '5px',
		borderRadius: '4px',
		position: 'relative',
		boxShadow: '5px 5px 11px -12px #888'
	},
	chatLeft: {
		float: 'left',
		padding: '10px 10px',
        fontSize:'14px',
        textAlign:'left'
	},
	clear: {
		clear: 'both'
	},
	chatRight: {
		float: 'right',
		backgroundColor: '#269bf3',
		color: '#fff',
        fontSize:'14px',
		padding: '10px 10px',
		borderRadius: '4px',
        textAlign:'left'
	},
	uploadFile: {
		width: '50%',
		float: 'left'
	},
	fileFormat: {
		width: '40%',
		float: 'left',
		color: '#fff',
		textAlign: 'center',
		margin: '10px 10px'
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
		display: 'block',
		textDecoration: 'none'
	},
	attachment:{
		width: '3%',
		float: 'left',
		margin: '10px 2px',
		opacity: '0'
	},
	textareabox: {
		width: '86%',
		margin: '4px 5px 0px 5px',
		height: '40px',
		background: '#fbf9fd',
		border: '0px',
		float: 'left',
           '@media screen and (min-width:768px) and (max-width:1024px)': {
			width: '82%'
		}
	},
	send: {
		width: '5%',
		float: 'left',
		margin: '9px 0px',
		cursor: 'pointer'
	},
	chatSection: {
		float: 'left',
		width: '38%',
		margin: '0px 0px',
		'@media screen and (min-width:768px) and (max-width:980px)': {
			width: '45%'
		}
	},
	reciver: {
		margin: '20px 0px',
		display: 'inline-block'
	},
	profileLeft: {
		float: 'left',
		margin: '0px 10px',
		fontSize: '13px',
		fontWeight: '600',
		color: '#7f8fa4',
		textAlign: 'center'
	},
	sender: {
		margin: '20px 0px',
		display: 'inline-block',
		float: 'right'
	},
	profileRight: {
		float: 'right',
		margin: '0px 10px',
		fontSize: '12px',
		fontWeight: '600',
		color: '#7f8fa4',
		textAlign: 'center'
	},
	profileRightSection: {
		background: '#fafbfe',
		right: '0px',
		width: '25%',
		float: 'right',
		height: '490px',
		padding: '10px 10px',
		boxShadow: '4px -6px 3px 2px #888',
		'@media screen and (min-width:768px) and (max-width:980px)': {
			width: '75%',
			boxShadow: 'none'
		}
	},
	profileRightTop: {
		padding: '31px 20px',
		borderBottom: '#edeef2 solid 1px',
		position: 'relative'
	},
	bell: {
		float: 'left',
		marginTop: '-8px'
	},
	bellBlueCircel: {
		background: '#269bf3',
		textAlign: 'right',
		borderRadius: '50%',
		float: 'left',
		width: '6px',
		height: '6px',
		top: '21px',
		left: '13px',
		position: 'absolute'
	},
	caret: {
		color: '#269bf3'
	},
	profileDetail: {
		textAlign: 'center',
		margin: '10px 0px'
	},
	profileDetailH1: {
		fontSize: '20px',
		color: '#878b91',
		fontWeight: '600',
		textAlign: 'center'
	},
	profileDetailsubH1: {
		fontSize: '14px',
		color: '#878b91',
		marginBottom: '15px',
		textAlign: 'center'
	}, 
	detail: {
		width: '98%',
		margin: '0 auto',
		borderTop: '#efedf1 solid 1px',
		display: 'inline-block'
	},
	headingName: {
		width: '50%',
		fontSize: '15px',
		color: '#9da0a5',
		padding: '8px 10px',
		float: 'left',
		textAlign: 'left'
	},
	subHeadingName: {
		width: '50%',
		float: 'left',
		fontSize: '15px',
		color: '#9da0a5',
		padding: '8px 10px',
		textAlign: 'right',
        '@media screen and (min-width:768px) and (max-width:980px)': {
			textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '50%',
            padding: '8px 5px',
            overflow: 'hidden'
		}
	},
	nonactive: {
		background: '#fff',
		padding: '5px 0px',
		borderBottom: '#f2f2f3 solid 1px',
		display: 'inline-block',
		width: '100%',
		cursor:'pointer'
	},
	rightPart: {
		float: 'left',
		width: '15%',
		padding: '15px 0px'
	},
	typeinput:{
		background: '#eff3f6',
		border: '0px',
		width: '100%',
		padding: '0px 15px',
		color: '#878b91',
		fontSize: '14px',
		boxShadow : 'none',
		color : '#666'
	},
	whiteblueCircel: {
		width: '5px',
		height: '5px',
		margin: '4px 2px',
		background: '#269bf3',
		borderRadius: '90%',
		display: 'block',
		float: 'left'
	},
	dropDown:{
		float: 'right',
		color: '#878b91',
		fontSize: '15px',
		fontWeight: '600',
		marginTop: '-8px'
	},
	
	masNotification: {
	position:'absolute',
	background:'#FF7800',
	color:'#fff',
	fontSize:'11px',
	borderRadius:'50%',
	top:'-10px',
	padding: '1px 6px',
	right:'-14'
	},
	
	onlineCircle: {
	position:'absolute',
	background:'#2ecb70',
	borderRadius:'50%',
	border:'2px solid #fff',
	top:'36px',
	padding: '4px 4px',
	left:'32px',
	'@media screen and (min-width:768px) and (max-width:980px)': {
	  padding: '3px 3px'
	 }
 },
	
	chatScroll: {
	    height: '355px',
		overflowY:'auto',
		display: "block",
		textAlign:'center',
		color:'rgb(135, 139, 145)',
		fontSize:'16px'
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
	messageArea: {
		width:'100%'
	},
	upload : {
		width: '20px',
		height: '36px',
		background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/attachmenticon.png)no-repeat',
		backgroundPosition:'57% 89%',
		overflow: 'hidden',
		display:'block',
		float:'left'
	},
	modalBox: {
		marginTop:'200px 0px'
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
  disabled: {
	pointerEvents:'none'
  },
  
  leftMessageBox : {
    position:'relative'
  },
  
  showProfileArea : {
    display: 'block',
	 '@media screen and (min-width:768px) and (max-width:980px)': {
	  display:'block'
	  }
	  },
	  
   hideProfileArea : {
    display: 'block',
	 '@media screen and (min-width:768px) and (max-width:980px)': {
	  display:'none'
	  }
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
	borderRight: '8px solid #fff'
}

}
export default style
