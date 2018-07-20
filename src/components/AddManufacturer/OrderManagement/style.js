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
	background:'#eff3f6',
    minHeight: '100vh'
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
    }
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
		width: '100%',
		height: 200,
		maxHeight: 200
	},
	
	formHeading: {
		"fontSize": "24px",
		"margin": "margin: 30px 0px 10px 0px",
		'@media screen and (max-width:767px)': {
			"fontSize": "24px"
		}
	},
	inventoryBg: {
		"background": "#fff",
		"border": "#e7e9ed solid 1px",
		"margin": "10px 0px",
		"borderRadius": "3px",
		"padding": "30px 30px",
		"display": "inline-block",
        '@media screen and (max-width:767px)': {
			"margin": "30px 0px"
            },
               '@media screen and (min-width:768px) and (max-width:1024px)': {
                 "margin": "30px 0px"
		}
	},
    
    	orderManagementBg: {
		"background": "#fff",
		"border": "#e7e9ed solid 1px",
		"margin": "10px 0px",
		"borderRadius": "3px",
		"padding": "0px",
		"display": "block",
       '@media screen and (max-width:767px)': {
			"margin": "30px 0px"
               },
               '@media screen and (min-width:768px) and (max-width:1024px)': {
                 "margin": "30px 0px"
		}
	},

		inventoryTableBg: {
		"background": "#fff",
		"border": "#e7e9ed solid 1px",
		"margin": "10px 0px",
		"borderRadius": "3px",
		"padding": "30px 0px",
		 "overflowX": "hidden",
		"display": "inline-block"
	},
	
	imageArea: {
		marginTop:'20px'
	},

	inputFile: {
		"margin": "10px 0px",
		"padding": "40px 10px",
		"float": "left",
		"border": "#e7e9ed solid 1px",
		"width": "70%",
		"borderRadius": "3px"
	},
	upload: {
		"background": "url(http://localhost/img/filetype.png) center no-repeat",
		"backgroundPosition": "48% 0%",
		"overflow": "hidden"
	},
	imageInput: {
		"display": "block !important",
		"width": "100% !important",
		"height": "40px !important",
		"opacity": "0 !important",
		"overflow": "hidden !important"
	},
	fileText: {
		"color": "#7f8fa4",
		"fontSize": "13px",
		"textAlign": "center",
		"fontWeight": "normal",
		"lineHeight": "15px"
	},
	imagesList: {
		"width": "25%",
		"float": "left",
		"marginLeft": "5px"
	},
	formFields: {
		"borderLeft": "#ebebeb solid 1px",
		"paddingLeft": "20px",
		'@media screen and (max-width:767px)': {
			"borderLeft": "0px"
		},
		'@media screen and (min-width:768px) and (max-width:1024px)': {
			"borderLeft": "0px"
		}
	},
	priceField: {
		marginTop:'18px'
	},
	inputGroup: {
		"width": "35%",
		'@media screen and (max-width:767px)': {
			"width": "100%"
		},
		'@media screen and (min-width:768px) and (max-width:1024px)': {
			"width": "60%"
		}
	},
	titleStyle: {
		color: '#7f8fa4'
	},
	buttonTopMargin: {
		"marginTop": "40px",
		'@media screen and (max-width:767px)': {
			"marginTop": "40px",
			"textAlign": "center"
		}
	},
	greenBtn: {
		"display": "inline-block",
		"marginBottom": "0px",
		"fontSize": "14px",
		"fontWeight": "400",
		"color": "#FFF",
		"lineHeight": "1.42857",
		"textAlign": "center",
		"background": "linear-gradient(to bottom, #39b54a 0%,#33aa44 100%,#207cca 100%,#33aa44 100%,#33aa44 100%)",
		"whiteSpace": "nowrap",
		"verticalAlign": "middle",
		"cursor": "pointer",
		"MozUserSelect": "none",
		"border": "#249533 solid 1px",
		"borderRadius": "3px",
		"textDecoration": "none",
		"padding": "6px 20px",
		"padding": "7px 15px",
		"width": "auto",
		'@media screen and (max-width:767px)': {
			"marginLeft": "0px"
		}
	},
    
    orderManagementBtn : {
        width: '150px',
        float: 'left',
        textAlign: 'center',
        '@media screen and (max-width:767px)': {
         width:'100%',
         margin:'10px 0px'
         },
         '@media screen and (min-width:768px) and (max-width:1024px)': {
         width: '143px',
         margin:'10px 0px',
         textAlign: 'left',
         float:'left'
        }
    },
    
	tableHeading: {
		fontSize: '24px',
		margin: '26px 26px',
		display:'block'
	},
	table: {
		"width": "100%",
		"maxWidth": "100%",
		"marginBottom": "20px",
		"borderTop": "0px !important"
	},
	col100: {
		width:'100%',
		margin:'10px 0px',
		float:'left',
        color: '#7f8fa4',
        fontSize: '16px'
	},
    colBold :{
     color: '#7f8fa4',
     fontSize: '16px',
     textAlign:'center',
     fontWeight:'600'
    },
	personalProfile : {
		width:'100%'
	},
    bottomDiv : {
    clear:'both',
    width:'100%'
    },
	personalProfileInput :{
		width:'245px',
		padding:'0px 10px',
		color:'#adafb2',
		fontWeight:'600',
		marginBottom:'30px',
		height:'34px',
		textAlign:'left'
	},
	btnSave :{
		marginLeft:'22px',
		marginTop: '26px',
		padding:'9px 20px',
		width: 'auto' 
	},
	headerBox : {
		"width": "100%",
		"background": "rgb(255, 255, 255) none repeat scroll 0% 0%",
		"margin": "0px",
		"display": "block"
  },
	header:{
	"width": "100%",
	"background": "#ffffff",
	"margin": "0px",
	"borderBottom": "#e6eaee solid 1px"
	},
	headerText: {
		"color": "#000",
		"fontSize": "24px",
		"padding": "22px 22px 22px 22px",
		'@media screen and (max-width:767px)': {
			"textAlign": "center",
			"padding": "10px 0px"
		}
	},
	headerLink: {
		"margin": "19px 0px",
		"textAlign": "right",
		'@media screen and (min-width:768px) and (max-width:1024px)': {
			"marginLeft": "30px"
		},
        '@media screen and (max-width:767px)': {
			"textAlign": "center",
            "margin": "0px",
		}
	},
    mobilePadding : {
     '@media screen and (max-width:767px)': {
			"paddingRight": "0px",
            "paddingLeft":  "0px"
		}
    },
    
	saveButtonArea: {
		"width": "75%",
		'@media screen and (max-width:767px)': {
			"textAlign": "center",
			"margin": "0 auto",
            "marginTop": "10px",
            "marginBottom": "10px",
            "display" : "block"
		},
		'@media screen and (min-width:768px) and (max-width:1024px)': {
			"width": "100%",
			"marginLeft": "0px"
		}
	},
	blueButton: {
		"display": "inline-block",
		"padding": "5px 25px",
		"marginBottom": "0px",
		"fontSize": "16px",
		"fontWeight": "400",
		"color": "#FFF",
		"lineHeight": "1.42857",
		"textAlign": "center",
		"background": "linear-gradient(to bottom, #1991eb 0%,#2989d8 100%,#207cca 100%,#2ea1f8 100%)",
		"whiteSpace": "nowrap",
		"verticalAlign": "middle",
		"cursor": "pointer",
		"MozUserSelect": "none",
		"border": "1px solid transparent",
		"borderRadius": "4px",
		"textDecoration": "none",
		"marginRight": "10px",
		"marginLeft": "22px",
		"padding": "7px 15px",
		"width": "auto",
		'@media screen and (max-width:767px)': {
			"marginLeft": "0px",
            "marginTop":"10px"
		}
	},
	btnSave: {
		"marginLeft": "22px",
		"padding": "7px 15px",
		"width": "auto",
		'@media screen and (max-width:767px)': {
			"marginLeft": "0px"
		}
	},
	divider: {
		"background": "#ebebeb",
		"height": "1px",
		"width": "100%",
		"margin": "0 auto",
		"display": "inline-block"
	},
	 padding0: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
	rightGrayBox: {
		"background": "#fafbfc",
		"border": "#e7e9ed solid 1px",
		//"marginTop": "15px",
		"borderRadius": "3px",
		"padding": "10px 10px"
	},
	grayHeading: {
		"color": "#354052",
		"fontSize": "16px",
		"fontWeight": "bold",
		"marginTop": "10px",
		"display" : "block",
		"textAlign" : "justify",
		"lineHeight" : "20px",
		"marginBottom" : "12px"
	},
	icon: {
		"background": "url(http://localhost/img/icon.png) center no-repeat",
		"height": "16px",
		"width": "16px",
		"float": "left",
		"margin": "3px 5px 0px 0px"
	},
	grayContent: {
		"fontSize": "13px",
		"textAlign": "justify",
		"marginTop": "3px",
		"marginBottom": "10px",
		"fontWeight": "normal",
		"color": "#7c8ca5",
		"width": "100%",
		"lineHeight": "16px",
		"marginLeft": "3px"
	},
	grayDivider: {
		"background": "#ebebeb",
		"height": "1px",
		"width": "90%",
		"margin": "0 auto",
		"display": "inline-block"
	},
	bottomMargin: {
		"marginBottom": "20px"
	},
	contactSupport: {
		"background": "#fff",
		"color": "#00aaff",
		"padding": "15px 0px",
		"fontWeight": "600",
		"fontSize": "14px",
		"textAlign": "center",
		"marginLeft": "-10px",
		"marginRight": "-10px",
		"marginBottom": "-9px",
		"borderTop": "#ebebeb solid 1px"
	},
	inventoryInput: {
		boxShadow:'none',
		fontWeight:'normal'
	},
	confirm: {
		float:'right',
		textAlign : 'right',
		marginRight : '18px'
	},
	viewDiv: {
		marginRight: '5px'
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
		height: '34px'
		},
	
 displayInline : {
      display:'inline-block',
      marginLeft:'0px',
      marginTop:'20px',
      width: '100%'
      },
      
      
      ItemsH1:{
		fontSize: '24px',
		margin: '26px 26px',
		display:'block',
      '@media screen and (max-width:767px)': {
        fontSize: '24px',
        textAlign: 'center',
        margin: '26px 0px 26px 0px'
      },
        '@media screen and (min-width:767px) and (max-width:1024px) ': {
          margin: '26px 10px',
      }
      
    },
    
    
    textCenter : { 
     '@media screen and (max-width:767px)': {
      textAlign:'center',
      margin:'10px 0px'
    }
    },
    
    floatRight : {
      float: 'right',
      '@media screen and (min-width:767px) and (max-width:1024px) ': {
          float: 'left'
      }
    },
    
    saveProducts : {
       '@media screen and (max-width:767px)': {
        width:'100%'
       }
    
    },
    
    tableResponsive : {
    width:'100%',
    overflowX:'auto',
    display:'block'

    }

}

export default style
