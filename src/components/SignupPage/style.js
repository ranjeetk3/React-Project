// dependencies
import globalStyles from '../../styles'
import color from 'color'

const style = {
    body: {
        margin:'0',
        padding:'0'
    },
    html : {
        margin:'0',
        padding:'0'
    },
    leftSection: {
		background: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/backgrounds/left-bg.jpg) no-repeat center center',
		backgroundSize: 'cover',
		MozBackgroundSize: 'cover',
		WebkitBackgroundSize: 'cover',
		OBackgroundSize: 'cover',
		float: 'left',
		position: 'relative',
		height : '100vh',
		width : '50%'
    },
	mainContainer : {
		position: 'absolute',
		height: '100vh',
		background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(9, 9, 9, 0.7) 100%)',
		color: '#ffffff',
		width: '100%',
    overflowY: 'auto'
	},
	ragisterColForm: {
		padding: '25px 100px'
	},
	formTitle: {
		fontSize: '50px',
		margin: '20px 0'
	},
	rightSection: {
		background: 'linear-gradient(0deg, #1991eb 0%, #2ea1f8 100%)',
		float: 'right',
		position: 'relative',
		textAlign: 'center',
		height: '100vh',
		width: '50%'
	},
	enrollPanel: {
		backgroundColor: '#269bf3',
		color: '#ffffff',
		padding: '40px 10px 15px 30px',
		position: 'absolute',
		width: '400px',
		right: 'auto',
		bottom: '25vh',
		borderTopLeftRadius: '0px',
		borderBottomLeftRadius: '0px',
		height: '228px',
		textAlign: 'left',
		left: '0px',
		borderBottomRightRadius: '4px',
		borderTopRightRadius: '4px'
	},
	enrollCol : {
		position: 'relative',
        width: '359px'
	},
	iconCol: {
		position: 'absolute',
		top: '-70px',
		left: '0px'
	},
	h2: {
		fontSize: '26px',
		marginBottom: '15px'
	},
	p: {
		fontSize: '18px',
		lineHeight: '24px'
	},
	btnEnroll: {
		display: 'inline-block',
		padding: '6px 30px',
		marginBottom: '0',
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
		marginLeft: '5px',
		marginTop: '20px'
	},
  icon2:{
    width: '62px'
  },
	clr: {
		clear: 'both',
		display : 'block'
	},
	displayBlock: {
		display : 'block'
	},
	iconPos: {
		position: 'absolute',
		right: '20px',
		top: '133px',
		fontSize: '40px',
		opacity: '0.3'
	},
	header: {
		logo: {
			marginTop: '15vh',
			display : 'block'
		},
		imgRes : {
			maxWidth: '100%'
		},
		logoImg: {
			width: '48%'
		}
	},
	 loader:{
	background: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    display: 'block',
	height: '658px',
    position: 'absolute'
	},
  loaderImage: {
	margin: '0 auto',
    top: '45%'
  },
  
}

export default style
