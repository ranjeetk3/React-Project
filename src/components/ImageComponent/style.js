const style = {
	displayBlock : {
		display: 'block'
	},
	imageArea: {
		marginTop:'20px',
		position:'relative'
	},
	inputFile: {
		margin: '0px',
		float: 'left',
		border: '#e7e9ed solid 1px',
		width: '100%',
		borderRadius: '3px',
		textAlign:'center',
		lineHeight : '16px'
	},
	upload: {
		background: 'url(http://localhost/img/filetype.png) center no-repeat',
		overflow: 'hidden',
		display:'block',
		backgroundPosition: '51% 30%'
	},
	input : {
		display: 'block',
		width: '183px',
		height: '162px',
		opacity: '0',
		overflow: 'hidden'
	},
	fileText: {
		color: '#7f8fa4',
		fontSize: '13px',
		textAlign: 'center',
		fontWeight: 'normal',
		lineHeight: '15px',
		position:'absolute',
		float:'left',
		width:'100%',
		left:'0',
		top: '95px'
	},
	uploadText:{
	   float:'left',
       width:'70%',
       position: 'relative'	   
	},
	image: {
		width: '56px',
		display:'inline-block',
		padding:'5px 0px',
		margin:'5px 0px',
		position:'relative',
		border:'#eee solid 1px',
		borderRadius: '3px',
		boxShadow:'0px 0px 6px 0px #e0e0e0'
	},
	cross: {
	    position:'absolute',
		top:'-5px',
		right:'-4px',
		color:'#FFF',
		fontSize:'11px',
		background: 'rgb(239, 0, 0)',
        borderRadius: '50%',
        padding: '0px 3px',
		fontWeight:'bold',
		cursor:'pointer'
	 },
	dragimg:{
	    maxWidth:'100%',
		height:'auto'
	},
	imagesList: {
		width: '27%',
		float: 'left',
		marginLeft: '5px',
		textAlign:'center',
        '@media screen and (max-width:767px)': {
			width: '20%'
		}
	},
	disabled: {
		pointerEvents:'none'
	}
}

export default style
