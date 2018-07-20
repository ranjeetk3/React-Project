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


mobilepadding :{
'@media screen and (max-width:767px)': {
		 paddingRight: '0px',
		 paddingLeft:'0px'
    }
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
  
 

  clr: {
		clear: 'both',
		display : 'block'
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
		width: '400px',
		height: '70px',
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
		"padding": "22px 22px 22px 32px",
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
            "marginBottom": "20px",
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
            "marginTop": "10px"
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
	dividerleft: {
		'borderLeft': '#ebebeb solid 1px',
		'paddingLeft': '20px',
		'marginTop': '20px', 
		'textAlign': 'center',
		'display' :'inline-block'
	},
	formHeading: {
		"fontSize": "24px",
		"margin": "10px 0px 10px 0px",
		'@media screen and (max-width:767px)': {
			"fontSize": "24px"
		}
	},
	inventoryBg: {
		"background": "#fff",
		"border": "#e7e9ed solid 1px",
		"margin": "0px",
		"borderRadius": "3px",
		"padding": "30px 15px",
		"display": "inline-block"
       
	},
    inventoryBackg: {
		"background": "#fff",
		"border": "#e7e9ed solid 1px",
		"margin": "10px 0px",
		"borderRadius": "3px",
		"padding": "20px 0px",
		"display": "inline-block"
	},
	inventory:{
		'fontSize': '24px',
		'marginMargin': '30px 0px 10px 0px'
	},
	productH1: {
		'margin': '10px 15px 0px 30px',
		'fontSize': '24px',
		'width': '100%',
        'clear':'both',
		'@media screen and (max-width:767px)': {
            "width": "100%",
			"textAlign": "center",
			"fontSize": "24px",
            "margin": '0px 0px'
		},
		'@media screen and (min-width:768px) and (max-width:1024px)': {
			"margin": "0px",
			"textAlign": "center",
			"fontSize": "24px"
		}

	},


	productH2: {
		'margin': '10px 15px 26px 10px',
		'fontSize': '24px',
		'width': '100%',
		'@media screen and (max-width:767px)': {
			"margin": "0px",
			"textAlign": "center",
			"fontSize": "24px"
		},
		'@media screen and (min-width:768px) and (max-width:1024px)': {
			"margin": "0px",
			"textAlign": "center",
			"fontSize": "24px"
		}

	},


	imageArea: {
		marginTop:'20px'
	},
	inputFile: {
		"margin": "8px 0px",
		"padding": "32px 10px",
		"float": "left",
		"border": "#e7e9ed solid 1px",
		"width": "100%",
		"borderRadius": "3px",
		"textAlign":"center",
		"lineHeight" : "16px"
	},
	upload: {
		"background": "url(http://localhost/img/package.png) center no-repeat",
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
		"marginLeft": "5px",
        '@media screen and (max-width:767px)': {
			"width": "20%"
		}
	},
	formFields: {
		"borderLeft": "#ebebeb solid 1px",
		"paddingLeft": "20px",
		'@media screen and (max-width:767px)': {
			"borderLeft": "0px",
            "paddind" : "0px"
		},
		'@media screen and (min-width:768px) and (max-width:1024px)': {
			"borderLeft": "0px"
		}
	},
	priceField: {
		marginTop:'0px'
	},
	inputGroup: {
		"width": "30%",
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
		"marginTop": "23px",
		'@media screen and (max-width:767px)': {
			"marginTop": "0px",
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
		"marginLeft": "22px",
		"padding": "7px 15px",
		"width": "auto",
		'@media screen and (max-width:767px)': {
			"marginLeft": "0px"
		}
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
		"margin": "1px 5px 0px 0px"
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
	
	addonInput : {
	    float: "left",
		height: "33px",
		borderRadius: "5px 0px 0px 5px",
		position: "absolute",
		left: "-1px",
		width: "40px",
		borderBottom: "0px"
    },

	upload : {
		width: '184px',
		height: '36px',
		background: 'url(http://localhost/img/filetype.png) center no-repeat',
		backgroundPosition:'7%',
		overflow: 'hidden',
		display:'block',
		marginLeft: '37px',
		marginTop: '17px'
	},
	input : {
		display: 'block',
		width: '183px',
		height: '57px',
		opacity: '0',
		overflow: 'hidden'
	},
	dropDownList:{
		padding: '6px 12px',
		fontSize: '14px',
		lineHeight: '1.42857143',
		color: '#555',
		backgroundColor: 'white',
		backgroundImage: 'none',
		border: '1px solid #ced0da',
		borderRadius: '4px',
		background: '-moz-linear-gradient(top,  #feffff 0%, #f4f5f8 100%, #2989d8 100%, #f4f5f8 100%)',
		background: '-webkit-linear-gradient(top,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)',
		background: 'linear-gradient(to bottom,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)',
		width: '100%',
		height: '30px'
	},
	
	inputBox : {
        backgroundColor: '#fff',
		backgroundImage: 'none',
		border: '1px solid #ced0da',
		borderRadius: '4px',
		padding: '0px 5px',
		boxShadow : 'none',
		height : '34px'
    },
	tabAncher: {
		"background": "#fff",
		"color": "#000",
		"fontWeight": "600",
		"borderRadius": "0px",
		"borderBottom": "#1a92eb solid 2px"
    },
	tabContent: {
		"padding": "5px 15px"
	},
    
    addonpriceInput : {
        "width" : "60%",
        "paddingLeft":"40px"
    },
    
    headerBox : {
        "width": "100%",
        "background": "rgb(255, 255, 255) none repeat scroll 0% 0%",
        "margin": "0px",
        "display": "block"
  },
  toolbarStyle: {
	marginBottom: '10px'
  },
  profileImg : {
		width: '45%',
		marginTop: '32px' 
  },
  profileFrame : {
		width:'160px', 
		height:'160px', 
		borderRadius:'50%', 
		background:'#fff', 
		border:'#e6eaee solid 1px',
		marginLeft:'45px'
	},
  frameImg : {
		marginLeft: '8px', 
		marginTop: '11px',
		width: '153px',
		height: '153px'	
	},
  profileBtn : {
		width:'100%'
	},

  editBtn : {
    textAlign: 'center',
    marginTop: '15px',
    display: 'inline-flex',
	'@media screen and (max-width:767px)': {
		display: 'inline-flex',
	}
},

  uploadBtn : {
		width: '184px',
		height: '36px',
		background: 'url(http://localhost/img/add-photo.png) center no-repeat',
		backgroundPosition:'45% 10%',
		textAlign:'center',
		overflow: 'hidden',
		display:'block',
    	marginTop: '5px'
	},
  packageh1 : {
  	fontSize: '24px',
  	 margin: '15px 0px 15px 5px'
  	},

  	padding0 : {
  		paddingLeft:'0px',
  		paddingRight:'0px'
  	},
  	addProducts: {
  		'background':'#fff',
  		 'border':'#e7e9ed solid 1px',
  		 'margin':'22px 0px 10px',
  		 'borderRadius':'3px',
  		 'padding':'20px 0px 40px',
  		 'display':'inline-block'
  		},
        
         packageItem: {
  		'background':'#fff',
  		 'border':'#e7e9ed solid 1px',
  		 'margin':'22px 0px 10px',
  		 'borderRadius':'3px',
  		 'padding':'20px 0px 0px',
  		 'display':'inline-block'
  		},
  	saveProducts: { 
  		'float':'right',
  		'margin':'-17px 25px 20px 28px'
  	},
  	btnSave1: {
  		"marginLeft":"22px",
  		"padding":"7px 15px",
  		"width":"auto"
  	},
  	greenBtn: {
  		"display":"inline-block",
  		"marginBottom":"0px",
  		"fontSize":"14px",
  		"fontWeight":"400",
  		"color":"#FFF",
  		"lineHeight":"1.42857",
  		"textAlign":"center",
  		"background":"linear-gradient(to bottom, #39b54a 0%,#33aa44 100%,#207cca 100%,#33aa44 100%,#33aa44 100%)",
  		"whiteSpace":"nowrap",
  		"verticalAlign":"middle",
  		"cursor":"pointer",
  		"MozUserSelect":"none",
  		"border":"#249533 solid 1px",
  		"borderRadius":"3px",
  		"textDecoration":"none",
  		"padding":"6px 20px"
  	},
  	price :{
  		"fontSize":"18px",
  		"fontWeight":"600",
  		"float":"right",
  		"margin":"25px 25px",
  		"textAlign":"right",
  		"width":"100%"
  	},

  	priceInputBox: {
        "width":"15%",
        "border" : "0px",
        "margin":"0px 0px 0px 10px",
        "borderRadius":"0px",
        "boxShadow":"none"
    },


  	inventoryTextarea : {
        fontSize: '14px',
	    padding: '0px 5px',
	    lineHeight: '1.42857143',
	    color: '#555',
	    border: '1px solid #ced0da',
	    borderRadius: '3px',
	    color: '#7f8fa4',
	    width:'100%'
     },

     quantityBox : {
      width:'50%',
      backgroundColor: 'rgb(255, 255, 255)',
	  border: '1px solid rgb(206, 208, 218)',
	  borderRadius: '4px',
	  padding: '0px 5px',
	  boxShadow: 'none',
	  height:'25px'
     },
	 
	 tableResponsive:{
    minHeight:'.01%',
    overflowX:'auto',
    display:'block',
    width:'100%'
},

textCenter : {
	textAlign:'center',
	marginTop: '10px'
}

}

export default style
