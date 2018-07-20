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
		marginBottom:'4%',
		/*width:'850px',*/
		'@media screen and (max-width: 767px)': {
      marginLeft:'0px',
			width:'100%'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'0px'
    }
	},
	pastInvoicesHeading : {
		position:'relative', 
		marginLeft:'0px',
		display:'block',
		'@media screen and (max-width:767px)': {
            marginLeft:'0px',
			width:'100%',
			marginTop:'20px',
			textAlign:'center'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
		  marginTop:'20px'
    }
	},
	
	button : {
	  position:'absolute',
		top: '-12px',
		left: '10px',
		'@media screen and (max-width:767px)': {
           marginLeft:'0px',
		   marginTop:'0px',
		   marginBottom:'10px',
			width:'100%',
			textAlign:'center'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
		  marginTop:'20px'
    }
	},
	
	padding0 : {
	    paddingLeft : "0px",
		paddingRight : "0px"
	},
	
	heading : {
		fontSize:'23px', 
		margin: '26px 0px 15px 10px',
		'@media screen and (max-width:640px)': {
      textAlign:'center', 
			margin:'20px 0px 5px 0px', 
			fontSize:'26px'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
            marginLeft:'0px',
			marginTop:'20px',
			fontSize:'20px'
    }
	},
	invoicesSelect : {
		marginLeft:'0px',
		'@media screen and (max-width: 767px)': {
      marginLeft:'0px'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'0px'
    }
	},
	check : {
		width:'20px', 
		float:'left', 
		margin:'30px 8px 0px 8px'
	},
	checkbox : {
		marginTop:'0px',
		'@media screen and (max-width:640px)': {
      marginTop:'28px'
    }
	},
	select : {
		float:'left', 
		width:'180px',
		'@media screen and (max-width:640px)': {
     width:'85%'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
     width:'104px'
    }
	},
	calendarinputContainer : {
		marginLeft:'0px',
		'@media screen and (max-width:640px)': {
     marginLeft:'0px',
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
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
		backgroundColor: '#fafcfe',
		borderBottom: '1px solid #e6eaee'
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
		marginTop:'20px',
		color:'#ccc',
		size:'25%'
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
		whiteSpace: 'nowrap',
		textAlign:'center'
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
		'@media screen and (min-width:768px) and (max-width:1024px)': {
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
	contentSectionMiddle :{
	 width: '76%',
	 marginLeft:'20px',
		'@media screen and (max-width:767px)': {
     width:'100%',
		 marginLeft:'0px',
		 marginRight: '0px',
		 marginTop:'30px'
    },
			'@media screen and (min-width:768px) and (max-width:1024px)': {
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
		width:'325px',
		background:'#fff',
		height:'auto',
		color:'#b5b5b5',
		fontSize:'14px',
		border:'#e6eaee solid 1px',
		borderRadius:'4px',
		display:'block',
		'@media screen and (max-width:767px)': {
     marginLeft:'0px',
		 width:'auto'
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
	background:'#eff3f6',
	/* minHeight:'1050px' */
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
margin0:{
	margin: '0px'
},
columHeight:{
height:'34px',
background:'green'
},

divHeight:{
minHeight:'20%'
},
inputField: {
		padding: '6px 12px',
		margin:'25px 5px 10px 10px',
		fontSize: '14px',
		lineHeight: '1.42857143',
		color: '#555',
		backgroundColor: 'white',
		backgroundImage: 'none',
		border: '1px solid #ccc',
		borderRadius: '4px',
		WebkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
		boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
		WebkitTransition: 'border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s',
		OTransition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
		transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
		width: '25%',
		'@media screen and (max-width:767px)': {
     width:'100%',
		 margin:'25px 5px 10px 0px',
    },
},
btnSearch: {
      display: 'inline-block',
      padding: '8px 16px',
			marginLeft:'10px',
      marginTop: '8px',
      fontSize: '14px',
      lineHeight: '1.42857143',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      MsTouchAction: 'manipulation',
      touchAction: 'manipulation',
      cursor: 'pointer',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none',
      backgroundImage: 'none',
      border: '1px solid transparent',
      borderRadius: '4px',
      textDecoration: 'none',
      color: '#ffffff',
      backgroundColor: '#37b047',
		border:'rgb(4, 159, 24) solid 1px'
    },
		
	searchField : {
		width: '200px',
		float: 'right',
		borderRadius: '5px',
		height: '34px',
		marginBottom: '10px'
		},
		loader:{
		background: 'rgba(0, 0, 0, 0.4)',
		width: '100%',
		display: 'block',
		height: '1271px',
		position: 'absolute',
		zIndex:'999'
	},
	loaderImage: {
		margin: '0 auto',
		top: '30%'
	}

}
export default style
