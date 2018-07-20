const style = {
  displayBlock : {
    display: 'block'
  },
	displayNone : {
    display: 'none'
  },
  thanks: {
    backgroundColor: '#2197f0',
    padding: '30px 0',
    fontWeight: '400'
  },
  heading: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '20px',
    textAlign: 'center'
  },
  formCol: {
    marginBottom: '10px'
  },
  leftCol: {
    float: 'left'
  },
  btnLogin: {
    backgroundColor: '#7dc855'
  },
  clr: {
    clear: 'both',
    display : 'block'
  },
  qusCol: {
    background: 'rgb(43,159,247) url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/backgrounds/onboard-bg.jpg) no-repeat',
    backgroundSize: '100% 720px',
    paddingTop: '50px',
    paddingBottom: '20px'
  },
  content : {
    width: '80%',
    margin: '0 auto'
  },
  left: {
    width: '40%',
    float: 'left',
    marginLeft: '14.5%',
    padding:'15px'
  },
  right: {
    width: '40%',
    float: 'left',
    padding:'15px'
  },
  next: {
    padding: '20px 0',
    marginLeft: '95px',
    textAlign: 'center'
  },
  label: {
    marginBottom: '5px',
    color: '#fff'
  },
  col35: {
    width: '35%'
  },
  col65: {
    width: '65%'
  },
  col70: {
    width: '70%'
  },
  incol70: {
  width: '67%'
  },
  rcol30: {
    width: '40%'
  },
  rincol30: {
    width: '53%'
  },
  rcol70: {
    width: '60%'
  },
  rincol70: {
    width: '80%'
  },
  equalSection: {
    width: '58%',
    lineHeight: 'inherit'
  },
  col50: {
    width: '50%'
  },
 inline: {
		 display: 'inline-block'
	},
	col71:{
		 width: '71%'
	},
	errorBorder: {
		borderColor:'red'
	},
	fieldsContainer: {
		display: 'flex',
		flex: '1 1 100%',
		alignItems: 'flex-start'
	},
	employee: {
		added:{
			backgroundColor: '#248bd8',
			borderRadius: '4px',
			marginLeft: '14.5%',
			padding: '10px',
			width: '74.5%',
			marginTop: '0px',
			display: 'block',
			marginBottom:'30px',
			minHeight: '156px',
			maxHeight:'550px'
		},
		head:{
			display: 'block'
		},
		permission:{
			display: 'block',
			fontSize: '21px',
			fontWeight: 'normal',
			color: '#fff',
			paddingBottom: '10px',
			float: 'inherit'
		},
		tableAdd:{
			display: 'block',
			background: '#fff',
			padding: '10px',
			minHeight: '100px',
			maxHeight:'400px',
			overflowY: 'auto'
		},
		table: {
			width: '100%',
			borderCollapse: 'collapse',
			borderSpacing: '0',
			display: 'block',
			fontSize: '12px'
		},
		thead: {
			width: '100%'
		},
		tbody: {
			maxHeight: '500px'
			//overflowY: 'auto'
		},
		tr: {
			display: 'flex',
			flex: '1 1 100%',
			justifyContent: 'space-between',
			borderBottom: '1px solid #e7e9ed',
		},
		td: {
			width: '20%',        
			textAlign: 'left',
			padding: '20px 10px',
			wordWrap: 'break-word',
			color: '#354052'
		},
		th: {
			width: '20%',
			textAlign: 'left',
			padding: '10px',
			color: '#7f8fa4'
		},
		right:{
			textAlign: 'right'
		},
		btnWrap: {
			marginLeft: '14.5%',
			width: '74.5%'
		}
	},
btnAdj: {
		marginRight: '15px',
		marginLeft: '85%',
		marginBottom: '0px'
	},
	btnEnroll: {
		display: 'inline-block',
		padding: '6px 30px',
		marginBottom: '0px',
		fontSize: '14px',
		fontWeight: '400',
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
		backgroundColor: '#7dc855',
		color: '#fff',
		marginLeft: '20px',
		marginTop: '0px'
	},
	table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0'
  },
  thead: {
    width: 'calc(100% - 17px)'
  },
  tbody: {
    height: '100px',
    overflowY: 'auto'
  },
  tr: {
    display: 'block'
  },
  td: {
    width: '25%',
    float: 'left',
    borderBottom: '1px solid black',
    textAlign: 'left'
  },
  th: {
    width: '25%',
    float: 'left',
    borderBottom: '1px solid black',
    textAlign: 'left'
  },
	tr: {
		':after': {
			display: 'block',
			visibility: 'hidden',
			clear: 'both'
		}
  },
 button: {
      float: 'right',
      position: 'relative',
      top: '15px',
      padding: '6px 25px'
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
	loader:{
		background: 'rgba(0, 0, 0, 0.4)',
		width: '100%',
		display: 'block',
		height: '215vh',
		position: 'absolute',
	    marginTop: '-276px'
	},
	loaderImage: {
	 margin: '0 auto',
     top: '69%'
  },
  
   validationIcon : {
    margin: '4px 15px'
  },
  
  alertMessage : {
    width: '30%',
    margin: '0px auto',
    display: 'block',
	textAlign:'center'
  }
}

export default style
