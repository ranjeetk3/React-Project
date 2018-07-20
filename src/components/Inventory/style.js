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
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/manufactureActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activeVendorIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/vendorActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activeProductIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/productActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activeInventoryIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activePackageNameIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/packageActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activeOrderIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/orderActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activeCalendarIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventorycalActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activeReportsIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryreportActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
activeSettingsIcon: {
    backgroundColor:'#1d84d1',
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventorysettingActiveIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'
},
wrapper:{
    background:'#eff3f6'
},
manufacture: {
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/manufactureIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    ':hover': {
        backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/manufactureActiveIcon.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
    }
},
vendor: {
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/vendorIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    ':hover': {
            backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/vendorActiveIcon.png)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'
    }
},
product: {
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/productIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    ':hover': {
        backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/productActiveIcon.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center'
    }
},
inventory: {
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    ':hover': {
            backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryActiveIcon.png)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'
    }
},
packageName: {
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/packageIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    ':hover': {
            backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/packageActiveIcon.png)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'
    }
},
order: {
        backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/orderIcon.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        ':hover': {
                backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/orderActiveIcon.png)',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center center'
        }
},
calendar: {
        backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventorycalIcon.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        ':hover': {
            backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventorycalActiveIcon.png)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'
        }
},
reports: {
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryreportIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    ':hover': {
            backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryreportActiveIcon.png)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'
    }
},
settings: {
    backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventorysettingIcon.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    ':hover': {
            backgroundImage:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventorysettingActiveIcon.png)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'
    },
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
},
addProducts : {
    background: '#fff',
    border: '#e7e9ed solid 1px',
    marginBottom: '10px',
    borderRadius: '3px',
    padding: '20px 20px 0px 20px',
    display: 'inline-block',
	marginTop:'20px'
},

locationH1 : {
    margin:'10px 0px 26px 30px',
    fontSize:'24px',
    width:'13%',
    float:'left',
    '@media screen and (max-width: 767px)': {
        width:'100%',
        textAlign:'center',
        margin:'7px 0px 15px 0px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
        width:'100%',
        textAlign:'center',
        margin:'7px 0px 15px 0px'
    },
},

searchfilterh1 : {
	margin:'30px 0px 26px 0px',
    fontSize:'24px',
    width:'100%',
    float:'left',
	textAlign:'center',
    '@media screen and (max-width: 767px)': {
        width:'100%',
        textAlign:'center',
        margin:'7px 0px 15px 0px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
        width:'100%',
        textAlign:'center',
        margin:'7px 0px 15px 0px'
    },
},

selectSection : {
    width:'74%',
    float:'left',
    marginLeft:'20px',
    '@media screen and (max-width: 767px)': {
        marginBottom:'15px',
        width:'100%',
        marginLeft:'0px',
        padding:'0px 15px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
        marginBottom:'15px',
        width:'100%',
        marginLeft:'0px',
        padding:'0px 50px'
    },
},
productSelect: {
    width:'100%',
    padding:'0px 3px',
    height:'34px',
    background: '#feffff', 
    border: '1px solid #ced0da',
    borderRadius:'3px',
    color:'#333c48',
    fontSize:'14px',
    fontWeight:'600',
    height:'34px',
    background: '#feffff', /* Old browsers */
    background: '-moz-linear-gradie nt(top,  #feffff 0%, #f4f5f8 100%, #2989d8 100%, #f4f5f8 100%)', /* FF3.6-15 */
    background: '-webkit-linear-gradient(top,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)', /* Chrome10-25,Safari5.1-6 */
    background: 'linear-gradient(to bottom,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#f4f5f8',GradientType=0 )", /* IE6-9 */

},
tableResponsive:{
    minHeight:'.01%',
    overflowX:'auto',
    display:'block',
    width:'100%'
},

selectSectionmain :
{ 
 width: '74%',
 float: 'left', 
 marginLeft:'20px',
 marginTop:'10px'
 },
mMargin:{
    margin:'0',
    display: 'block '
},
searchFilter: {
    background:'#fff',
    border:'#e7e9ed solid 1px',
    paddingBottom:'10px',
    margin:'0px 0px 10px 16px',
    width:'23%',
	marginTop:'20px',
    borderRadius:'3px',
    display:'inline-block',
    '@media screen and (max-width: 767px)': {
        margin:'20px 0px 10px 0px',
        width:'100%',
        padding:'0px 0px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
        margin:'20px 0px 10px 0px',
        width:'100%'
    },
},
inputNewField:{
    margin:'0px 0px 0px 0px',
    '@media screen and (max-width: 767px)': {
        margin:'0px 0px 15px 0px',
        float:'left',
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
        width:'22%'
    },
},
fillterInputLabel:{
color: '#7f8fa4',
width: '100%',
fontSize: '14px',
},

visiblityHidden : {
 display:'none',
 marginBottom:'0px'
},
fillterInput :{
    width: '100%',
    fontSize: '14px',
	fontWeight: 'normal',
    color: '#7f8fa4',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #ced0da',
    height:'34px',
    padding:'0px 5px',
    borderRadius:'3px',
	boxShadow:'none'
},
size:{
     width:'50px',
     height:'50px'
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
	
	   headerBox : {
        "width": "100%",
        "background": "rgb(255, 255, 255) none repeat scroll 0% 0%",
        "margin": "0px",
        "display": "block"
  },
 productDetail:{
     background:"#fff",
     border:"#e7e9ed solid 1px",
     margin:"20px 0px 10px 0px",
     borderRadius:"3px",
     padding:"20px 20px 0px 10px",
     display:"inline-block"
},
productDetailh1 :{
    margin: "10px 0px 26px 15px",
    width:'100%',
    float:'left',
    fontSize: '24px',
      '@media screen and (max-width: 767px)': {
        width:'100%',
        textAlign:'center',
        margin:'15px 0px 15px 0px'
    },
},
productDetaillabel: {
    color: '#7f8fa4',
    width: '100%',
    fontSize: '14px',
    display: 'inline-block',
    marginBottom: '5px',
    fontWeight: '700'
},
productDetail:{
    background:'#fff',
    border:'#e7e9ed solid 1px',
    margin:'20px 0px 10px 0px',
    borderRadius:'3px',
    padding:'20px 20px 0px 20px',
    display:'inline-block'
},

inventoryH1 : {
    margin:'10px 0px 0px 30px',
    fontSize:'24px',
    width:'30%',
    float:'left',
    '@media screen and (max-width: 767px)': {
        width:'100%',
        textAlign:'center',
        margin:'15px 0px 15px 0px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
        width:'100%',
        textAlign:'center',
        margin:'7px 0px 15px 0px'
    },
},
checkboxDiv : {   
    float: 'left',
    width: '100%',
    marginBottom:'20px'
},

checkbox :{
    position: 'relative',
    display: 'block',
    float:'left',
    marginRight:'5px'
},

inputCheckBox :{
	padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857',
    color: 'rgb(85, 85, 85)',
    backgroundColor: 'white',
    backgroundImage: 'none',
    border: '1px solid rgb(204, 204, 204)',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    float: 'left',
	width: 'auto',
    marginRight: '5px'
},

selectSection1 :{ 
    width:'72%',
    float: 'left',
    marginLeft:'25px',
    marginTop:'3px',
    position:'absolute',
    top: '81px',
    left: '0',
       '@media screen and (min-width:768px) and (max-width:1024px)': {
        width:'86%',
        position:'relative',
        top:'0px'
    },
    '@media screen and (max-width: 767px)': {
        width:'86%',
        position:'relative',
        top:'44px',
        marginLeft:'16px',
    },
},
saveProducts : {
    margin: '5px 0px',
    textAlign: 'center',
	width: '100%'
},
btnSave1: {
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

selectBox :{
    width: '31%',  
    margin: '0px 5px',
    float: 'left',
    '@media screen and (max-width: 767px)': {
        width:'100%', 
        margin: '6px 5px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
        width:'100%',
        margin: '6px 10px'
    },
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
    
    inputField :{
    margin: '0px 0px 20px 0px', 
    color:'#7f8fa4', 
    fontSize:'14px', 
    textAlign:'justify',
    display:'block',
	lineHeight:'18px',
    },
	
	searchPadding : {
	'@media screen and (max-width: 767px)': {
          paddingLeft: '0px',
		  paddingRight: '0px',
		  marginBottom:'20px'
    }
    },
	
	margin0 : {
	'@media screen and (max-width: 767px)': {
		margin:'0px'
	}
	},
	   
    inputFieldSearch :{
    margin: '51px 30px 0px 0px', 
    color:'#7f8fa4', 
    fontSize:'14px', 
    textAlign:'justify',
    display:'block',
	lineHeight:'18px'
    },
    
    
    inputFile :{
    margin: '10px 0px',
    float: 'left',
    border: '#e7e9ed solid 1px',
    width: '100%',
    borderRadius: '3px',
	textAlign:'center'
    },
    
	inputBox:{
	padding: '0px 5px',
    fontSize: '14px',
    lineHeight: '1.42857',
    color: 'rgb(127, 143, 164)',
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundImage: 'none',
    border: '1px solid rgb(206, 208, 218)',
    borderRadius: '3px',
    boxShadow: 'none',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    width: '100%',
    fontWeight: 'normal',
    height: '34px'
	},
	
	
    upload: {
    width: '100%',
    textAlign: 'center'
},


    inventoryDetail:{
     background: '#fff', 
     width:'39%',
     border: '#e7e9ed solid 1px',
     margin: '20px 0px 10px 0px', 
     borderRadius: '3px', 
     padding: '20px 10px 20px 12px', 
     display: 'inline-block',
     marginLeft:'20px',
        '@media screen and (max-width: 767px)': {
          width:'100%', 
          marginLeft:'0px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
          width:'100%',
          marginLeft:'0px'
       
    },
  },

     inventoryDetailh1 : { 
        margin: '10px 0px 26px 15px',
        fontSize: '24px',
        width:'100%',
        display:'block',		
        '@media screen and (max-width: 767px)': {
          width:'100%', 
          textAlign:'center',
          padding: '20px 20px 20px 0px',
    },
    },

    mpadding :{
      '@media screen and (max-width: 767px)': {
              paddingLeft:'0px',
              paddingRight:'0px'
        },
    },
	
	imageSize : {
		width:'150px',
		height: '150px'
	},
	
	placeholderText : {
		content:'Select Input File',
		fontSize:'14px',
		color:'#000'
	}

}

export default style
