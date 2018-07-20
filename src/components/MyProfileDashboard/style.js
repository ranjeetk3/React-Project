import Radium from 'radium'

const style = {
	displayBlock: {
		display:'block'
	},
	padding0:{
		padding:'0px'
	},
	newuser: {
		float:'left',
		background:'#fff',
		borderRadius:'3px',
		border:'#e6eaee solid 1px',
		width:'100%',
		padding: '0px 10px 20px 10px',
        '@media screen and (max-width:767px)': {
		 marginTop:'20px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
		 marginTop:'20px'
    },
	},
    
    newuseradd : {

        '@media screen and (max-width:767px)': {
		 paddingLeft:'0px',
         paddingRight:'0px'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
		  paddingLeft:'0px',
         paddingRight:'0px'
    },
    
    },

	newuserh1: {
		fontSize:'24px',
		margin:'26px 15px 26px 0px'
	},
	personalProfile: { 
		width:'100%',
		marginBottom: '0px'
	},
	newUserInput: { 
		height: '34px',
		width:'100%',
		fontSize:'14px',
		lineHeight:'1.42857143',
		backgroundColor: '#fff',
		backgroundImage: 'none',
		border: '1px solid #dfe3e9',
		borderRadius: '3px',
		boxShadow: 'none',
		padding:'0px 5px',
		marginTop:'6px',
		fontWeight:'normal',
		marginBottom:'5px',
		color:'rgb(127, 143, 164)'
	},
	profileFrame : {
    display: 'block',
    margin: '0 auto'
	},
	frameImg : {
	width: '165px',
    height: '165px',
    borderRadius: '50%',
		display: 'block',
	},
	profileFrameImg: {
    width: '170px',
    height: '170px',
    borderRadius: '50%',
    background: 'rgb(255, 255, 255)',
    border: '1px solid rgb(230, 234, 238)',
    display: 'inline-block',
    margin: '0px auto',
    top: '5px',
},
	editProfileBtn: {
		width:'100%', 
		textAlign:'center',
		display: 'inline-block',
		marginBottom:'9px'
	},
	settingPermission: {
		width:'100%',
		float:'left',
		padding:'26px 0px', 
		marginTop:'20px', 
		background:'#fff', 
		borderRadius:'3px', 
		border:'#e6eaee solid 1px',
		marginBottom:'30px'
	},
	settingPermissionh1: {
		fontSize:'24px', 
		margin:'0px 15px 26px 15px',
        '@media screen and (max-width:767px)': {
		textAlign:'center'
    },
        '@media screen and (min-width:768px) and (max-width:1024px)': {
		 padding:'0px 15px 0px', 
    },
	},
    
	blueStrip: {
		background : '#2298f0', 
		padding:'10px 10px',
		display:'inline-block',
		width:'100%'
	},
	blueIcon: {
		float:'left',
		padding:'0px 15px', 
		textAlign:'center'
	},
	blueIconTextActive: {
		color:'#fff',
		fontSize:'14px', 
		textAlign:'center'
	},
	blueIconText: { 
		color:'#b5d7f0',
		fontSize:'14px', 
		textAlign:'center'
	},
	allaccess: {
		fontSize:'16px',
		color:'#414f64',
		fontWeight:'600',
		marginTop:'13px',
        display: 'block'
	},
	col15: {
		width:'20%', 
		float:'left',
        '@media screen and (max-width:767px)': {
         width:'43%'
    },
    '@media screen and (min-width:768px) and (max-width:1024px)': {
     width:'26%',
    },
	},

	switch: {
		position: 'relative',
		display: 'inline-block',
		width: '50px',
		height: '24px',
		marginTop: '12px'
	},
	slider: {
		position: 'absolute',
		cursor: 'pointer',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		backgroundColor: '#ccc',
		transition: '.4s',
		borderRadius: '34px'
	},
	round: {
		borderRadius: '34px'
	},
	tableHead: {
		color:'#414f64', 
		fontSize:'14px' 
	},
	contentTop: {
		marginTop:'30px'
	},
	contentSectionMiddle: {
		width:'76%'
	},
	wrapper:{
		background:'#eff3f6'
	},
	contentSection :{
		margin:'0px 0px',
		display:'block',
    minHeight:'1012px'
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
	selectField: { 
		height: '34px',
		width:'100%',
		fontSize: '14px',
		lineHeight: '1.42857143',
		color: '#adafb2',
		background: '#feffff', /* Old browsers */
		background: '-moz-linear-gradie nt(top,  #feffff 0%, #f4f5f8 100%, #2989d8 100%, #f4f5f8 100%)', /* FF3.6-15 */
		background: '-webkit-linear-gradient(top,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)', /* Chrome10-25,Safari5.1-6 */
		background: 'linear-gradient(to bottom,  #feffff 0%,#f4f5f8 100%,#2989d8 100%,#f4f5f8 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#f4f5f8',GradientType=0 )", /* IE6-9 */
		border: '1px solid #e6eaee',
		borderRadius: '4px',
		padding:'0px 5px',
		marginBottom:'8px',
	},
	profileLabel: {
		width:'100%', 
		color:'#7f8fa4', 
		fontSize:'14px', 
		fontWeight:'600',
		marginBottom:'0px'
	},
	btnGreen: {
		color: '#FFF',
		backgroundColor: '#67c236',
		fontWeight: '400',
		lineHeight: '1.42857',
		textAlign: 'center',
		whiteSpace: 'nowrap',
		verticalAlign: 'middle',
		cursor: 'pointer',
		border: '1px solid transparent',
		borderRadius: '4px',
		textDecoration: 'none',
		paddingLeft: '0px',
		padding: '5px 10px 5px 10px',
		border: '#5cb82b solid 1px'
	},
	btnGreenRightM: {
		width:'120px', 
		margin: '20px 0px',
		background:'url(../images/edit-profile.png) right no-repeat', 
		backgroundPosition: 'right 8px center'
	},
	upload : {
		width: '184px',
		height: '36px',
		background: 'url(http://localhost:8080/img/add-photo.png) no-repeat',
		overflow: 'hidden',
		display:'block',
        marginTop: '23px',
        marginBottom: '25px',
		display: 'inline-block'
	},
	input : {
		display: 'inline-block',
		width: '183px',
		height: '57px',
		opacity: '0',
		overflow: 'hidden'
	},
	permissions: {
    wrapper: {
      backgroundColor: '#248bd8',
      borderRadius: '4px',
      marginLeft: '14.5%',
      padding: '10px',
      width: '74.5%',
      marginTop: '10px',
      display: 'block'
    },
    header: {
      wrapper: {
        paddingBottom: '10px'
      },
      h2: {
        fontWeight: 'normal',
        color: '#fff',
        fontSize: '24px',
        float: 'left',
        width: '50%'
      }
    },
    branchesList:{
      float: 'right',
      width: '50%'
    },
    level: {
      backgroundColor: '#2298f0',
      padding: '10px',
			display: 'inline-block',
			width: '100%'
    },
    circle: {
      backgroundColor: '#248bd8',
      borderRadius: '100%',
      height: '52px',
      marginBottom: '5px',
      width: '52px',
      display: 'inline-block',
      	'@media screen and (max-width:767px)': {
		 marginTop: '20px'
		},
        '@media screen and (min-width:768px) and (max-width:1024px)': {
		 marginTop: '20px'
		},
    },
    circleActive: {
      backgroundColor: '#fff'
    },
    description: {
      color: '#fff',
      fontSize: '15px',
      textAlign: 'center',
      display: 'block'
    },
    iconCommon: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    },
    reportIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/reports.png)',
    },
    reportActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/reportsActive.png)',
      backgroundColor: '#fff'
    },
    billingIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/billing.png)',
    },
    billingActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/billingActive.png)',
      backgroundColor: '#fff'
    },
    hrIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/hr.png)',
    },
    hrActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/hrActive.png)',
      backgroundColor: '#fff'
    },
    clinicalIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/clinical.png)',
    },
    clinicalActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/clinicalActive.png)',
      backgroundColor: '#fff'
    },
    salesIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/sales.png)',
    },
    salesAvtiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/salesActive.png)',
      backgroundColor: '#fff'
    },
    inventoryIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventory.png)',
    },
    inventoryActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryActive.png)',
      backgroundColor: '#fff'
    },
    accountingIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/accounting.png)',
    },
    accountingActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/accountingActive.png)',
      backgroundColor: '#fff'
    },

    accessHeading: {
      color: '#fff',
      display: 'inline-block',
      float: 'left',
      fontSize: '16px',
      lineHeight: '1.8',
      padding: '0 10px 0 0'
    },
    labelSwitch: {
      position: 'relative',
      display: 'inline-block',
      width: '50px',
      height: '24px',
			marginTop:'12px'
    },
    switchCheckbox: {
      display:'none',
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
    round: {
      borderRadius: '34px',
    },
    roundBefore: {
      borderRadius: '50%'
    },
    checked: {
      backgroundColor: '#73c349'
    },
    checkedBefore: {
      WebkitTransform: 'translateX(26px)',
      MsTransform: 'translateX(26px)',
      transform: 'translateX(26px)'
    },
    accessTable: {
      background: '#fff',
      padding: '10px',
      boxSizing: 'border-box',
      display:'block'
    },
    li: {
      boxSizing: 'border-box',
      width: 'auto',
      textAlign:'center',
      marginLeft:'28px',
      display:'inline-block',
      '@media screen and (max-width:767px)': {
        marginTop:'30px',
		width: 'auto',
        display:'block'
		},
    '@media screen and (min-width:768px) and (max-width:1024px)': {
		width: 'auto',
        display:'block',
        marginLeft:'20px'
		},
	},
    
 

    branchSection: {
      marginTop: '10px',
      marginBottom: '5px',
       '@media screen and (max-width:767px)': {
        textAlign:'center'
		},
        '@media screen and (min-width:768px) and (max-width:1024px)': {
          textAlign:'center'
		},
    },
    button: {
      position: 'relative',
      top: '15px',
	  textAlign:'right',
      padding: '6px 25px',
       '@media screen and (max-width:767px)': {
        width:'100%',
        textAlign:'center'
		},
    },
	
    table: {
      width: '100%'
    },
    td: {
      padding: '10px 30px'      
    },
    center:{
      textAlign: 'center',
      width: '10%'
    },
    tr: {
      borderBottom:'1px solid #f2f2f3'
    },
    addBranches: {
      width: '70%',
      height: '55px',
      overflowY: 'auto',
      borderRadius: '4px',
      margin: '10px 10px 10px 0px',
      padding: '4px 10px'
    },
    branchWrapper: {
      padding: '5px 5px 0px 5px',
      color: '#248bd8',
      width: 'auto',
      margin: '5px 5px',
      textAlign: 'center',
      float: 'left',
      height: '20px',
      borderRadius: '3px',
      fontWeight: 'normal'
    },
    closebtn: {
      marginLeft: '7px',
      color: '#248bd8',
      fontWeight: 'bold',
      float: 'right',
      fontSize: '22px',
      lineHeight: '11px',
      cursor: 'pointer',
      transition: '0.3s'
    },
    branchButton: {
      marginLeft: '15px',
      marginTop: '5px',
      marginRight: '13px',
      marginBottom: '33px'
    },
		ulSection: {
			float: 'left',
			width: '100%'
		},
  },
	employee: {
		added:{
			borderRadius: '4px',
			width: '100%',
			marginTop: '30px',
			display: 'block',
			clear:'both'
		},
		head:{
			display: 'block'
		},
		permission:{
			display: 'block',
			fontSize: '21px',
			fontWeight: 'normal',
			color: '#000',
			paddingBottom: '10px',
			float: 'inherit'
		},
		tableAdd:{
			display: 'block',
			background: '#fff',
			padding: '10px'
		},
		table: {
			width: '100%',
			borderCollapse: 'collapse',
			borderSpacing: '0',
			fontSize: '12px'
		},
		thead: {
			width: '100%'
		},
		tbody: {
			maxHeight: '500px',
			overflowY: 'auto'
		},
		tr: {
			display: 'flex',
			flex: '1 1 100%',
			justifyContent: 'space-between',
			borderBottom: '1px solid #e7e9ed',
		},
		td: {
			width: '25%',        
			textAlign: 'left',
			padding: '20px 10px',
			wordWrap: 'break-word',
			color: '#354052'
		},
		th: {
			width: '25%',
			textAlign: 'left',
			padding: '10px',
			color: '#7f8fa4'
		},
		right:{
			textAlign: 'right'
		},
		btnWrap: {
            float:'right',
			right:'0px',
			marginTop:'20px',
            textAlign:'center'
            }
	},
	btnLogin: {
		backgroundColor: '#7dc855',
       '@media screen and (max-width:767px)': {
        marginTop:'10px'
		},
	},
    
    border: {
    margin: '20px 12px',
    borderRadius: '3px',
    height:'50px',
    border: '#e6eaee solid 1px',
       '@media screen and (min-width:768px) and (max-width:1024px)': {
       margin: '20px 40px',
		},
    },
    
	btnAdj: {
		marginRight: '15px'
	},
	textArea : {
	padding: '0px 5px',
    fontSize: '14px',
    lineHeight: '1.42857',
    background: '#fff',
    border: '1px solid rgb(223, 227, 233)',
    borderRadius: '3px',
    boxShadow: 'none',
    width: '94%',
		margin:'12px',
		height: '50px'
	},

	marginAddEmployee: {
		margin:'20px 15px 26px 0px'
	},
    
    tableResponsive : {
     overflowX: 'auto',
     display: 'block',
     width: '100%'
     },
	 label : {
		color:'#7f8fa4',
		textAlign:'left'
	},
    bold :{
	 fontWeight: '700'
	 }, 
	
	firstname : {
		backgroundImage:'url(http://localhost:8080/img/first-name-icn.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'right 8px center'
	},
	phoneno : {
		backgroundImage:'url(http://localhost:8080/img/ph-icn.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'right 8px center'
	},
	message : {
		backgroundImage:'url(http://localhost:8080/img/message-icn.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'right 8px center'
	},
	designation : {
		backgroundImage:'url(http://localhost:8080/img/designation.png)',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'right 8px center'
	},
	
	greenBtn: {
	color: '#FFF',
    backgroundColor: '#37b047',
    fontWeight: '400',
    lineHeight: '1.42857',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    border: '1px solid transparent',
    borderRadius: '4px',
	fontSize:'14px',
    textDecoration: 'none',
    padding: '9px 16px',
    border: '#5cb82b solid 1px'
},

	redBtn: {
	color: '#FFF',
    backgroundColor: '#ed1c24',
    fontWeight: '400',
    lineHeight: '1.42857',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    borderRadius: '4px',
	fontSize:'14px',
    textDecoration: 'none',
    padding: '9px 16px',
    border: '#ed1c24 solid 1px'
},
   btnSave: {
    marginLeft: '15px',
    marginTop: '20px',
    padding: '8px 20px',
    width: 'auto',
    fontSize: '16px'
},

textAlign: {
    textAlign:'center',

},

textAlignRight: {
    textAlign:'right',
	  '@media screen and (max-width:767px)': {
        textAlign:'center',
		},
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
  marginTop: {
	marginTop:'54px'
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

}

export default style
