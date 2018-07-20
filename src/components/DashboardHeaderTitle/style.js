const style = {
	displayBlock: {
		display:'block'
	},
	header: {
		width:'100%', 
		height:'auto', 
		margin:'0 auto',
    fontWeight: '400',
	  background:'-webkit-linear-gradient(top, #2ea1f8 0%,#2989d8 100%,#1a92ec 100%)'
	},
	headerTop: {
		width:'100%',
		margin:'0px',
		height:'70px',
		background:'-webkit-linear-gradient(top, #2ea1f8 0%,#2989d8 100%,#1a92ec 100%)',
		display:'flex'
	},
	logo: {
		width:'155px',
		height:'47px',
		margin:'10px'
	},

	nav: {
		width:'100%',
		listStyle:'none',
		display:'flex',
		marginTop:'13px',
		padding:'0px 0px'
	},
	ul :{
		width:'100%',
		listStyle:'none',
		display:'flex',
		marginTop:'13px',
		padding:'0px 0px'
	}, 
	li : {  
		margin:'14px 3px'
	},
	link: { 
		height:'45px',
		padding:'20px 10px',
		color:'#ffffff',
		fontSize:'14px', 
		textDecoration:'none',
	},
	headerDropIcon : {
		marginLeft: '51.5%', 
		marginTop: '21px'
	},
	dropbtn : {
		color: '#fff',
		marginTop:'10px',
		fontSize: '15px',
		border: 'none',
		cursor: 'pointer'
	},
	dropbtnText : {
		marginTop: '9px',
		marginLeft: '-10px',
		cursor: 'pointer'
	},
	dropdown : {
		position: 'relative',
		display: 'inline-block'
	},

	dropdownContent : {
		display:'none',
		padding: '0px 10px 0px 5px', 
		position: 'absolute',
		margin: '8px -18px 10px',
		zIndex: '999',
		textAlign: 'left',
		border: '#eee solid 1px',
		borderRadius: '5px 5px 5px 5px', 
		backgroundColor: '#ffffff',
		minWidth: '123px',
		overflow: 'auto',
		right: '0'
	},
	dropdownContentLink : {
		color: 'black',
		textAlign: 'left',
		padding: '5px 5px',
		margin: '0px 5px',
		textDecoration: 'none',
		borderBottom: '#eee solid 1px',
		display: 'block'
	},
	caretArrow : {
		background:'url(http://localhost:8080/img/arrow-down.png) left no-repeat',
		height:'5px',
		width:'20px',
		display:'inline-block',
		marginLeft:'-7px'
	},
	signoutDivider : {
		height: '1px',
		width: '100%',
		overflow: 'hidden',                                                    
		backgroundColor: '#ccc'
	},
	spanview : {
		marginRight:'30px',
		left:'10px'
	},
	userPanel : {
		textAlign: 'right',
		width:'auto',
		padding: '14px 0 0 0',
		marginLeft:'28px',
		color:'#fff'
	},
	userPanelLi : {
		color: '#fff',
		lineHeight: '45px',
		marginLeft: '74px',
		marginRight: '-92px',
		position: 'absolute',
		listStyle:'none'
	},
	redCircle : {     
		position: 'absolute',
		borderRadius: '100px',
		textAlign: 'center',
		fontWeight: 'normal',
		fontSize: '11px',
		lineHeight: '20px',
		left: '45px',
		background: '#FF7800 none repeat scroll 0% 0%',
		color: '#FFF',
		width: '22px',
		height: '22px',
		marginBottom: '30px',
		marginTop: '-51px',
		marginLeft: '-3px'
	},
	headerTopWhite : {
		width:'100%',
		background:'#ffffff',
		height:'70px', 
		margin:'0px', 
		position: 'relative', 
		borderBottom:'#e6eaee solid 1px',
		display:'flex'
	},
	headerTopWhiteTextLink : {
		right:'0px', 
		marginTop:'25px',
		'@media screen and (max-width:767px)': {
				marginTop:'0px', 
				textAlign:'center'
			},
		'@media screen and (min-width:768px) and (max-width:1024px)': {
      marginLeft:'30px'
    }
	},
	headerTopWhiteLink : {
		color:'#7f8fa4',
		fontSize:'14px', 
		textDecoration:'none'
	},
	greenCircle : { 
		background:'#37b148', 
		borderRadius: '50%', 
		width: '8px', 
		height: '8px', 
		position: 'absolute', 
		top: '4px', 
		left: '-20px'
	},
	content : {
		width:'100%',
		display:'flex',
		marginTop:'30px'
	},
	headerTopWhite :
	{
			width:'100%',
			background:'#ffffff',
			height:'70px',
			margin:'0px',
			borderBottom:'#e6eaee solid 1px',
	},
	headText : {
		color:'#000',
		fontSize:'17px',
		margin:'20px 20px',
		'@media screen and (max-width:767px)': {
		  margin:'8px 0px',
		  textAlign:'center'
		}
	},
	greenCircle :{ 
			background:'#37b148',
			textAlign:'right',
			borderRadius: '50%',
			float:'left',
			width: '8px',
			height: '8px',
			marginTop: '4px',
			marginRight: '10px',
			'@media screen and (max-width:767px)': {
			marginRight: '-81px',
            marginLeft: '45px'
			}
		},
		
	  automaticSaved :{
			marginRight:'0px',
            color:'#7f8fa4'
		},
        
	navbarInverse :{
    background: '#2ea1f8',
    background: '-moz-linear-gradient(top, #2ea1f8 0%, #2989d8 100%, #1a92ec 100%)',
    background: '-webkit-linear-gradient(top, #2ea1f8 0%,#2989d8 100%,#1a92ec 100%)',
		marginBottom:'0px',
		borderRadius:'0px',
		border:'0px',
		borderShadow:'none',
		display:'block',
		paddingLeft:'20px',
		paddingRight:'20px'
	},
	
	iconBar :{   
  	display: 'block',
    width: '22px',
    height: '2px',
    borderRadius: '1px',
    background: '#000'
},
	
	caretArrow :{
		width: '0', 
		height: '0', 
		background:'url(http://localhost:8080/img/arrow-down.png) left no-repeat',
		height:'5px',
		width:'20px',
		position: 'absolute',
		top: '23px',
		marginLeft: '-11px'
	},
	navBrand :{
		float:'left'
	},
	whiteLink:{
		color:'#ffffff',
		fontSize:'13px',
		textDecoration:'None',
		backgroundColor:'none',
		textShadow: 'none',
		':hover': {
			color:'#eeeeee',
			textDecoration:'None',
			textShadow: 'none',
			backgroundColor:'none'
    }
	},
	
	marginZero:{
		marginBottom:'0px'
	},
	container:{
		width:'100%',
		paddingLeft:'15px',
		paddingRight:'15px',
		margin:'0 auto'
	},
	well: {
	    marginBottom: '0px',
			padding:'0px',
			background:'transparent',
			border:'none',
			borderRadius:'0px',
			boxShadow:'none'
	},

}
export default style
