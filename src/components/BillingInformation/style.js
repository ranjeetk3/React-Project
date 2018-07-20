const style = {
	displayBlock : {
		display:'block'
	},
	pastInvoicesTable : { 
		/*marginLeft:'26.7%',*/
		border:'#e6eaee solid 1px',
		background:'#fff',
		borderRadius:'4px',
		marginTop:'29px',
		marginBottom:'15%',
		/*width:'850px',*/
		'@media screen and (max-width: 767px)': {
      marginLeft:'0px',
			width:'auto'
    },
		'@media only screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'61px'
    }
	},
	pastInvoicesHeading : {
		float:'left', 
		marginLeft:'0px',
		marginTop: '23px',
		'@media screen and (max-width:640px)': {
      marginLeft:'0px',
			width:'100%',
			textAlign:'center'
    }
	},
	heading : {
		fontSize:'23px', 
		margin: '26px 0px 26px 5px',
		'@media screen and (max-width:640px)': {
      textAlign:'center', 
			margin:'20px 0px 5px 0px', 
			fontSize:'26px'
    },
		'@media only screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'0px',
			fontSize:'20px'
    }
	},
	invoicesSelect : {
		marginLeft:'0px',
		'@media screen and (max-width: 767px)': {
      marginLeft:'0px'
    },
		'@media only screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'0px'
    }
	},
	check : {
		width:'20px', 
		float:'left', 
		margin:'0px 5px'
	},
	checkbox : {
		marginTop:'0px',
		'@media screen and (max-width:640px)': {
      marginTop:'0px'
    }
	},
	select : {
		float:'left', 
		width:'165px',
		'@media screen and (max-width:640px)': {
     width:'85%'
    },
		'@media only screen and (min-width:768px) and (max-width:1024px)': {
     width:'104px'
    }
	},
	calendarinputContainer : {
		marginLeft:'0px',
		'@media screen and (max-width:640px)': {
     marginLeft:'0px',
    },
		'@media only screen and (min-width:768px) and (max-width:1024px)': {
     width:'48%',
		 marginLeft:'3px'
    }
	},
	tableContainer : {
		width: '100%',
		margin: '0 0 1em',
		color:'#333c48',
		display:'block',
		overflow: 'auto'
	 },
	d0 : { 
		backgroundColor: '#f5f8fa',
		borderBottom: '1px solid #e7e9ed',
		height: '34px'
	},
	d1 : {
		backgroundColor: '#ffffff'
	},
	pager : {
    paddingLeft: '0',
    margin: '20px 10px',
    textAlign: 'right',
    listStyle: 'none'
	},
	pagerLi : {
    display: 'inline-block',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '15px',
		':hover': {
			background:'#1d94ee',
			color:'#ffffff'
    }
	},
	pagerNext : {
    display: 'inline-block',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '15px',
		':hover': {
			background:'#1d94ee',
			color:'#ffffff'
    }
	},
	pastInvoicesTableInput : {    
		height: '34px',
		fontSize: '14px',
		lineHeight: '1.42857143',
		color: '#555',
		backgroundColor: '#fff',
		backgroundImage: 'none',
		border: '1px solid #dfe3e9',
		borderRadius: '4px',
		padding:'0px 5px',
		marginBottom:'17px',
		marginTop:'10px',
		color:'#ccc'
	},
	pastInvoicesTableSelect : {    
		height: '34px',
		width:'100%',
		fontSize: '14px',
		lineHeight: '1.42857143',
		color: '#8d949f',
		background: '#feffff',
		background: '-moz-linear-gradient(top,  #feffff 0%, #f4f5f8 100%, #2989d8 100%, #f4f5f8 100%)',
		background: '-webkit-linear-gradient(top,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)',
		background: 'linear-gradient(to bottom,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)',
		filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#feffff", endColorstr="#f4f5f8",GradientType=0 )',
		border: '1px solid #e6eaee',
		borderRadius: '4px',
		padding:'0px 5px',
		marginBottom:'17px',
		marginTop:'22px'
	},
	checkboxInput : {
		borderRadius:'3px',
		background:'#f8f9fb solid 1px',
		border:'#d0d2db solid 10px',
		margin: '14px 0 0'
	},
	tableTh : {
		background: '#f5f8fa url(http://localhost/img/shorting.png)right no-repeat',
		backgroundPosition: '70%',
		cursor: 'pointer',
		whiteSpace: 'nowrap'
	},
	tableTd : {
		whiteSpace: 'nowrap'
	},
	heading2 : {
		fontSize: '18px',
		margin: '30px 0px 20px 0px',
		float: 'left'
	},
	calendarInput : {
		width:'30%',
		fontSize: '14px',
		float:'left',
		height:'34px',
		color: '#8d949f',
		background:'#fafbfc url(http://localhost/img/calendar.png) no-repeat scroll 7px 7px',
		cursor:'pointer',
		border: '1px solid #e6eaee',
		borderRadius: '4px',
		padding:'0px 5px',
		marginBottom:'17px',
		marginTop:'22px',
		marginRight:'10px',
		paddingLeft:'30px',
		'@media screen and (max-width:640px)': {
     width:'100%'
    },
		'@media only screen and (min-width:768px) and (max-width:1024px)': {
     width:'82px'
    }
	},
	search : { 	
		width:'100%',
		padding: '5px' ,          
		fontFamily: 'Georgia',    
		border: '1px solid #e6eaee' ,
		background:'#f7f8fa url(http://localhost/img/searchicon.png)right no-repeat scroll',
		borderRadius:'30px',	
		marginTop:'24px',
		marginRight:'20px',
		backgroundPosition: '95%',
		backgroundSize: 'auto 71%'
	},
	contentTop:{
		marginTop:'30px'
	},
	contentSectionMiddle: {
	 width: '80%',
		'@media screen and (max-width:767px)': {
     width:'100%',
		 marginRight: '0px',
		 marginTop:'30px'
    },
		'@media only screen and (min-width:768px) and (max-width:1024px)': {
		 width:'72%'
		 }
	},
	marginleft20:{
		marginLeft:'20px',
		'@media screen and (max-width:640px)': {
		marginLeft: '0px'
		}
	},
	box:{
		background:'#fff',
		height:'auto',
		color:'#b5b5b5',
		fontSize:'14px',
		border:'#e6eaee solid 1px',
		borderRadius:'4px',
		display:'block',
		'@media screen and (max-width:767px)': {
     marginLeft:'0px',
    }
	},
	boxBottomLine :{
		borderBottom: '#e6eaee solid 1px',
		padding:'12px',
		display:'flex'
	},
	boxTextIcon :{
		width:'40px', 
		background:'#e8eaf1',
		borderRadius:'3px',
		padding:'20px 0px 20px 0px'
	},
	pastInvoices :{
		backgroundImage:'url(http://localhost/img/past-invoices.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center'
	},
	active :{
		backgroundColor:'#269cf4'
	},
	boxText:{
		width:'260px',
		marginLeft:'20px',
		color:'#000',
		textDecoration:'none'
	},
	contentSection :{
		/*width:'66%', */
		margin:'0px 0px',
		display:'block'
	},
	bodyColor :{
	background:'#eff3f6'
	},
	calendar: {
	'@media screen and (max-width:767px)': {
     width:'100%'
    }
		},
	paddingLeft: {
	paddingLeft:'0px'
	},
	
	billingInformation :{
		backgroundImage:'url(http://localhost/img/billing-information.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center'
	},
	
	companyHierarchy :{
		backgroundImage:'url(http://localhost/img/company-hierachy.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center'
	},
	
	softwareOption:{
		backgroundImage:'url(http://localhost/img/software-option.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center'
	},
	
	userSetting:{
		backgroundImage:'url(http://localhost/img/use-setting.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center'
	},
	fixWidth:{
		width:'100%'
	},
	
	wrapper:{
	background:'#eff3f6'
	},
	paddingZero: {
	paddingRight:'0px',
	paddingLeft:'0px'
	},
	
	pAlign:{
  color:'#b5b5b5',
	paddingLeft:'10px',
	marginBottom:'0px'
},
	ColRightTable:{
	float:'left',
	border:'#e6eaee solid 1px',
	background:'#fff',
	borderRadius:'4px',
	display:'block',
	'@media (max-width:767px)':{
		width:'100%',
		paddingLeft:'15px',
		paddingRight:'15px',
		marginLeft:'0px',
		},
		'@media only screen and (min-width:768px) and (min-width:1024px)' : {
		  width:'100%',
			marginLeft:'0px',
		}
	},
	h1:{
			fontSize:'24px',
			margin: '25px 0px 25px 14px',
			display:'block',
			'@media (max-width:640px)':{
				fontSize:'17px'
			}
	},
	btnGreen :{
		color: '#FFF',
		backgroundColor: '#37b047',
		marginLeft: '15px'
	},
	
	btnAnother :{
		float: 'right',
		position: 'relative',
		top: '15px',
		padding:'6px 25px'
	},
	btnGreenRightM : {
		marginTop: '26px',
		width: '61px' 
	},
	tableContainer :{
		margin: '0 0 1em',
		color:'#333c48',
		display: 'block',
		width: '100%'
	},
	
	table :{
		borderLeft:'#e6eaee slid 1px',
		borderRight:'#e6eaee slid 1px',
		borderTop:'#e6eaee slid 1px'
	},
	th:{
		borderTop: '1px solid #ddd'
	},
	d0Td :{
		backgroundColor: '#fafcfe',
		borderBottom: '1px solid #e6eaee'
	},
	d1Td :{
		backgroundColor: '#f6f9fb',
		borderBottom: '1px solid #e6eaee'
	},
	rightCol:{
		width:'65%',
		marginTop:'0px',
		display:'block',
		marginLeft:'10px',
		'@media only screen and (min-width:768px) and (max-width:1024px)' : {
		  width:'100%',
			marginLeft:'0px',
			marginTop:'30px',
			paddingLeft:'0px',
			paddingRight:'0px'
		},
		'@media only screen and (min-width:320px) and (max-width:767px)' : {
		  width:'100%',
			marginLeft:'0px',
			paddingLeft:'0px',
			paddingRight:'0px'
		}	
	},
	btnBlue :{
		display: 'inline-block',
		padding: '0px 8px',
		marginBottom: '0px',
		fontSize: '12px',
		textAlign: 'center',
		fontWeight: '400',
		lineHeight: '1.42857',
		whiteSpace: 'nowrap',
		verticalAlign: 'middle',
		cursor: 'pointer',
		MozUserSelect: 'none',
		border: '1px solid transparent',
		borderRadius: '3px',
		textDecoration: 'none'
	},
	btnhyfenBlue:{
		background:'#1b84d3',
		border:'#0d76c5 solid 1px',
		color:'#fff' 
	
	},
	colRightsec :{
		marginTop:'20px',
		display:'block'
	},
	buttonColor: {
	backgroundColor:'#37b047'
	},
	colRightTableHeading :{
		display:'block'
	},
	btnStyle:{
		margin: '26px 0px 26px 5px',
		display:'block',
	},
	th :{
		backgroundColor: '#f5f8fa',
		color:'#7f8fa4',
		fontSize:"14px",
		borderTop:'1px solid #e7e9ed'
	},
	td :{
	height:'64px',
	color:"#333c48",
	fontSize:"13px",
	padding : "20px 0px 20px 30px"
	},
	padding20:{
		paddingLeft: '20px'
	},
	wrapper:{
	background:'#eff3f6',
	minHeight:'1052px'
	},
	tableTd : {
		whiteSpace: 'nowrap',
	},

	thNoWrap : {
	whiteSpace:'nowrap'
	},
	
	padding0 : {
	paddingLeft:'0px',
	paddingRight:'0px'
	},
	customWidth:{
		width:'60%'
	},
	
	modalWidth : {
	width:'30%',
	margin:'0 auto'
	},
	
	modalBg : {
	background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/backgrounds/onboard-bg.jpg) no-repeat center center',
    backgroundSize: 'cover',
		MozBackgroundSize: 'cover',
		WebkitBackgroundSize: 'cover',
		OBackgroundSize: 'cover',
		display:'block',
		color:'#fff'
		},
		
		whiteText : {
		color:'#fff',
		display:'block'
		},
	
	marginBottom0 : {
	marginBottom: '0px'
	},
	padding30 : {
	paddindLeft:'30px'
	},
	columHeight :{
		background: '#f5f8fa',
		borderBottom: '0px',
		height: '34px',
		color: '#7f8fa4',
		fontSize: '13px',
		padding: '0 0px 0 30px',
		borderRight: '0px'
	},
	loader:{
		background: 'rgba(0, 0, 0, 0.4)',
		width: '100%',
		display: 'block',
		height: '100%',
		minHeight: '1010px',
		position: 'absolute',
		zIndex:'999'
	},
	loaderImage: {
		margin: '0 auto',
		top: '40%',
		zIndex:'999'
	},
}

export default style
