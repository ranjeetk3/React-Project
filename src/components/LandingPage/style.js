const style = {
  leftSection: {
		background: 'url("https://s3-us-west-2.amazonaws.com/lyferx-web/images/backgrounds/left-bg.jpg") no-repeat center center',
		backgroundSize: 'cover',
		MozBackgroundSize: 'cover',
		WebkitBackgroundSize: 'cover',
		OBackgroundSize: 'cover',
		float: 'left',
		position: 'relative',
		height : '100vh',
		width : '50%'
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
		height: '149px',
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
	clr: {
		clear: 'both',
		display : 'block'
	},
	displayBlock: {
		display : 'block'
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
	}
}

export default style
