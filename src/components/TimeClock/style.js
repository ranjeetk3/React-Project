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
	profileIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfile.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
    ':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfileActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeProfileIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/myProfileActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	timeClockIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClock.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
    ':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClockActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeTimeClockIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/timeClockActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	myPayrollIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverview.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverviewActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeMyPayrollIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/taskOverviewActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
	empDocIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocument.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocumentActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeEmpDocIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/employeDocumentActive.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
  },
  trainingCenerIcon: {
		backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenter.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center center',
		':hover':{
				backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/trainingCenterActive.png)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center center'
		}
	},
  activeTrainingCenerIcon: {
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
      background: '#fefefe',
      height: 'auto',
      margin: '0px 30px 43px 50px',
      borderRadius: '3px',
      border: '#e6eaee solid 1px',
      padding:'10px 15px 20px 15px',
      '@media screen and (max-width:767px)': {
        margin: '20px 10px',
        height: '290px',
        display:'block'
      },
        '@media screen and (min-width:767px) and (max-width:1024px) ': {
          margin: '0px 30px 43px 20px',
      }
    },
    blue: {
      background: '#269bf3',
      padding: '10px 10px',
      width: '90px',
      color: '#fff',
      fontWeight: '600',
      fontSize: '14px',
      textAlign: 'center',
      float: 'left'
    },
    clocktxt: {
      color: '#7f8fa4',
      fontSize: '15px',
      fontWeight: '700',
      float: 'left',
      padding: '8px 10px'
    },
    breakClass: {
      width: '36.9%',
      float: 'left',
      margin: '0px',
      '@media screen and (max-width:480px)': {
        width: '35.7%'
      },
       '@media screen and (min-width:767px) and (max-width:1024px) ': {
          width: '34.7%'
      }
    },
    graybg: {
      background: '#f2f6f8',
      padding: '10px 10px',
      width: '90px',
      fontWeight: '600',
      color: '#7f8fa4',
      fontSize: '14px',
      textAlign: 'center',
      float: 'left',
      '@media screen and (max-width:767px)': {
        width: '45%',
        fontSize: '12px',
        padding: '10px 0px'
      },
        '@media screen and (min-width:767px) and (max-width:1024px) ': {
          width: '65px'
      }
    },
    beginbreakicon: {
      background: 'url(http://localhost/img/begin-breakicon.png) no-repeat center',
      width: '55px',
      height: '29px',
      marginTop: '5px',
      float: 'left',
      '@media screen and (max-width:767px)': {
        width: '42px',
        marginTop: '10px',
        height: '29px'
      },
       '@media screen and (min-width:767px) and (max-width:1024px) ': {
          marginTop: '14px',
      }
    },
    endbreakicon: {
      background: 'url(http://localhost/img/end-breakicon.png) no-repeat center',
      width: '62px',
      height: '29px',
      marginTop: '5px',
      float: 'left',
      '@media screen and (max-width:767px)': {
        width: '42px',
        marginTop: '10px',
        height: '29px'
      },
       '@media screen and (min-width:767px) and (max-width:1024px) ': {
          marginTop: '14px',
      }
    },
  clr: {
		clear: 'both',
		display : 'block'
	},
  equal: {
  float: 'left',
  fontSize: '14px',
  margin: '10px 10px 10px 0px',
  width: '20px',
  '@media screen and (max-width:767px)': {
    float: 'left',
    fontSize: '14px',
    margin: '10px 5px 10px 5px',
    width: '3%'
  },
  '@media screen and (min-width:767px) and (max-width:1024px) ': {
          margin: '18px 0px 10px 0px',
      }
},
breakLast: {
  width: '18%',
  float: 'left',
  '@media screen and (max-width:767px)': {
    width: '17%',
    float: 'right'
  },
  '@media screen and (min-width:768px) and (max-width:980px)': {
    width: '16%',
    float: 'left'
  }
},
  graybgLast: {
    background: '#f2f6f8',
    padding: '10px 10px',
    width: '100%',
    color: '#7f8fa4',
    fontSize: '14px',
    textAlign: 'center',
    fontWeight: '600',
    float:'right',
    '@media screen and (max-width:767px)': {
      background: '#f2f6f8',
      fontSize: '12px',
      padding: '19px 0px',
      width: '100%'
    },
    '@media screen and (min-width:768px) and (max-width:980px)': {
      background: '#f2f6f8',
      padding: '20px 5px',
      width: '100%'
    }
  },
  margin0: {
    margin:'0px'
  },
  colCentered: {
    borderBottom: '#e6eaee solid 1px'
  },
  padding0: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  borderTop: {
    borderTop: '#e6eaee solid 1px'
  },
  colbreak: {
    borderBottom: '#e6eaee solid 1px'
  },
  pullRight: {
    '@media screen and (max-width:767px)': {
      textAlign: 'center'
    },
    '@media screen and (max-width:640px)': {
      textAlign: 'center'
    },
  },
  timeWrapper: {
    padding: '0px 0px 0px 25px',
    '@media screen and (max-width:767px)': {
      paddingLeft: '0px',
      paddingRight: '0px',
      marginTop:'30px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
      paddingLeft: '0px',
      paddingRight: '0px',
      marginTop:'30px'
    },
  },
  loader: {
    background: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    display: 'block',
    height: '100%',
    position: 'absolute'
  },
  loaderImage: {
    margin: '0 auto',
    top: '40%'
  },
	editorStyle:{
		overflow: 'auto',
		width: '50%',
		height: 300,
		maxHeight: 300
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
