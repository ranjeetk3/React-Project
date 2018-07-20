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
  activeManufactureIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfileActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	activeVendorIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClockActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	activeProductIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverviewActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	activeInventoryIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocumentActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	activePackageNameIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenterActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	wrapper:{
		background:'#eff3f6'
	},
  manufacture: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfile.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover': {
			backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfileActive.png)',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center center',
    }
	},
	vendor: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClock.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover': {
			backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClockActive.png)',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center center'
    }
	},
	product: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverview.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover': {
			backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverviewActive.png)',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center center'
    }
	},
	inventory: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocument.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover': {
			backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocumentActive.png)',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center center'
    }
	},
	packageName: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenter.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover': {
			backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenterActive.png)',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center center'
    }
	},
	pastInvoicesTable : { 
		background:'#fff',
		borderRadius:'4px',
		marginTop:'29px',
		marginBottom:'15%',
		paddingRight: '0px', 
    paddingLeft: '0px', 
		border: '1px solid #ddd',
		'@media screen and (max-width: 767px)': {
      marginLeft:'0px',
			width:'auto',
			paddingRight: '0px', 
			paddingLeft: '0px',
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'61px',
			paddingRight: '0px', 
			paddingLeft: '0px',
    }
	},
	pastInvoicesHeading : {
		float:'left', 
		marginLeft:'0px',
		marginTop: '23px',
		display:'block',
		width:'80%',
		'@media screen and (max-width:767px)': {
      marginLeft:'0px',
			width:'100%',
			textAlign:'center'
    }
	},
	button : {
	  position:'absolute',
		left: '15px',
		'@media screen and (max-width:767px)': {
			marginLeft:'0px',
			width:'10%',
			textAlign:'center'
		}
	},
	heading : {
		fontSize:'23px', 
		margin: '10px 0px 10px 10px',
		'@media screen and (max-width:640px)': {
      textAlign:'center', 
			margin:'20px 0px 5px 0px', 
			fontSize:'26px'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'0px',
			fontSize:'20px'
    }
	},
	divHeight:{
		minHeight:'20%'
	},
	btnSearch: {
      display: 'inline-block',
      padding: '7px 14px',
			marginLeft:'10px',
      fontSize: '13px',
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
	invoicesSelect : {
		marginLeft:'0px',
		'@media screen and (max-width: 767px)': {
      marginLeft:'0px'
    },
		'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'0px'
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
		marginTop:'0px'
	},
	dropDownList:{
			padding: '6px 12px',
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
			width: '100%',
			height: '30px'
	},
	
	 padding0 : {
	 paddingLeft : '0px',
	 paddingRight : '0px'
	 }
}

export default style
