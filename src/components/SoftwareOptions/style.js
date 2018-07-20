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
    minHeight:'950px'
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
	background:'#eff3f6'
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
      width: "410px",
      background: "#fcfcfc",
      margin: "20px 20px",
      borderRadius: "3px",
      border: "#e6eaee solid 1px",
      height: "auto",
      '@media screen and (max-width:767px)': {
        width: "100%",
        margin: "20px 0px",
        display:'block',
      },
      '@media screen and (min-width:768px) and (max-width:980px) ': {
        width: "100%",
        margin: "20px 0px"
      },
      '@media screen and (min-width:981px) and (max-width:1024px) ': {
        width: "100%",
        margin: "20px 0px"
      }
    },
	clr: {
		clear: 'both',
		display : 'block'
	},
  padding0: {
    paddingLeft: '0px',
    paddingRight: '0px'
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
    width: "455px",
    float: "left",
    background: "#fff",
    borderRadius: "3px",
    border: "#e6eaee solid 1px",
    '@media screen and (max-width:767px)': {
      marginLeft: "0px",
      width: "100%",
      paddingRight: "15px",
      paddingLeft: "15px",
      marginTop: "30px"
    },
    '@media screen and (min-width:768px) and (max-width:979px)': {
      width:"100%",
      padding: "0px 20px",
      marginTop: "30px"
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
    height: "48px",
    fontSize: "14px",
    padding: "0px 10px"
  },
  col80: {
    width: "80%",
    float: "left",
    padding: "15px 10px 10px 5px",
    color: "#414f64",
    fontWeight: "600",
    '@media screen and (max-width:767px)': {
      width: "70%"
    },
    '@media screen and (min-width:768px) and (max-width:980px)': {
      width: "75%"
    }
  },
  col15: {
    width: "15%",
    float: "left",
    '@media screen and (max-width:767px)': {
      width: "25%"
    },
    '@media screen and (min-width:768px) and (max-width:980px)': {
      width: "20%"
    }
  },
  pullRight: {
    '@media screen and (max-width:767px)': {
      textAlign: "center"
    },
    '@media screen and (max-width:640px)': {
      textAlign: "center"
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
    background: "#ffffff",
    borderTop: "#e6eaee solid 1px",
    borderBottom: "#e6eaee solid 1px"
  },
  greenBtn : {
    padding: '5px 20px',
    float: 'right',
    margin: '0px 24px 20px 20px',
    fontSize:'15px',
	background:'#5cb85c',
	borderRadius: '4px',
    '@media screen and (max-width:1024px)': {
       marginRight:'0px'
    },
  },
  loader:{
	    background: 'rgba(0, 0, 0, 0.4)',
		width: '102vw',
		height: '100%',
		marginLeft: 'calc(-110vw / 2)',
		marginRight: 'calc(-100vw / 2)',
		marginTop: 'calc(-106vw / 2)',
		marginBottom: 'calc(-116vw / 2)',
		minHeight: '1081px',
		position: 'absolute',
		zIndex: '999'
	},
	loaderImage: {
		margin: '0 auto',
		top: '65%',
		zIndex:'999'
	},
}

export default style
