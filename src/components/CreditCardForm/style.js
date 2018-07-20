const style = {
  displayBlock : {
    display: 'block'
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
  btnLogin: {
    width: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    background: '-webkit-linear-gradient(90deg, #7dc855 0%, #6fb04d 100%)',
    background: 'linear-gradient(90deg, #7dc855 0%, #6fb04d 100%)'
  },
  buttonGray: {
    background: '#ced0da',
    width: '120px'
  },
  buttonBlue: {
    background: '#248bd8',
    width: '120px'
  },
  buttonGreen: {
    background: '#7dc855',
  },
  clr: {
    clear: 'both',
    display : 'block'
  },
  qusCol: {
    background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/backgrounds/onboard-bg.jpg) no-repeat center center',
    paddingTop: '50px',
    paddingBottom: '20px',
    backgroundSize: 'cover',
		MozBackgroundSize: 'cover',
		WebkitBackgroundSize: 'cover',
		OBackgroundSize: 'cover',
  },
  content : {
    width: '25%',
    margin: '0 auto'
  },
  left: {
    width: '50%',
    float: 'left',
    padding:'5px',
    textAlign: 'right'
  },
  right: {
    width: '50%',
    float: 'left',
    padding:'5px'
  },
  fieldsContainer: {
    display: 'flex',
    flex: '1 1 100%',
    alignItems: 'flex-start'
  },
  summary:{
    wrapper:{
      backgroundColor: '#248bd8',
      color: '#ffffff',
      lineHeight: '15px',
      padding: '10px 20px',
      marginTop: '20px',
      borderRadius: '4px'
    },
    p:{
      fontSize: '17px',
      marginBottom: '5px'
    },
    h3:{
      fontSize: '20px',
      margin: '10px 0',
      fontWeight: '400'
    }
  },
  formHeading:{
    wrapper:{
      margin: '20px',
      textAlign:'center'
    },
    h2:{
      fontWeight: '400',
      color: '#ffffff',
      fontSize: '20px',
      margin: '15px 0'
    }
  },
  inputBig: {
    width: '118%'
  },
  line: {
    borderTop: '1px solid #fff',
    margin: '10px 0'
  },
  fieldsContainer: {
    display: 'flex',
    flex: '1 1 100%',
    alignItems: 'flex-start'
  },
  col50: {
    width: '50%'
  },
  
    col55: {
    width: '55%'
  },
	col30: {
    width: '30%'
  },
	col40: {
    width: '40%'
  },
  promo: {
    width: '136%'
  },
  promoText: {
    marginTop: '18px',
    fontSize: '14px',
    color: '#fff'
  },
  bold: {
    fontWeight: 'bold'
  },
  icon:{
    common: {
      backgroundPosition: '12px center',
      backgroundRepeat:'no-repeat',
      paddingLeft: '40px'
    },
    card:{
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/card.png)',
    },
    date:{
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/calender.png)',
    },
    cvc:{
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/lock.png)',
    }
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
	posRel: {
		position: 'relative'
	},
	cards : {
		position: 'absolute',
		top: '16.5px',
		zIndex: '5',
		width: '30px',
		right: '11.5px'
	},
	messageBg: {
		background:'rgba(255, 255, 255, 0.8)',
		padding:'10px 10px',
		borderRadius:'3px',
		display:'block'
	},
	cardError: {  
		color: 'rgb(218, 4, 4)',
		fontWeight: 'bold'
	},
	cardSuccess: {  
		color: 'rgb(53, 141, 7)',
		fontWeight: 'bold'
	},
	loader:{
		background: 'rgba(0, 0, 0, 0.4)',
		width: '100%',
		display: 'block',
		height: '165vh',
		position: 'absolute',
	    marginTop: '-276px',
		zIndex:'999',
		marginLeft: '-39%',
        marginTop: '-43.5%'
	},
	loaderImage: {
	 margin: '0 auto',
     top: '62%'
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
