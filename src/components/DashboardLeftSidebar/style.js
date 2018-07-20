import Radium from 'radium'

const style = {
	displayBlock: {
		display:'block'
	},
	contentSectionLeft : {
		width:'267px',
		marginRight:'25px',
    zIndex: '1',
    /*top: '178px',*/
    position: 'absolute',
		'@media screen and (max-width:767px)': {
     position: 'inherit',
    }
	},
	contentSectionLeftToppart : {
		width:'98%',
		height:'50px',
		background:'#269bf3',
		display:'flex',
		boxShadow:'0px 7px 30px -15px rgba(0,0,0,0.48)'
	},

	img : {
		background:'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/assets/drop-icon.png)',
		height:'24px',
		width:'24px',
		marginLeft:'204px',
		right: '31px',
		position:'absolute',
		top: '13px',
		cursor: 'pointer',
		display: 'block',
        float: 'right'
	},
	contentSectionLeftInnerpart : {
		width:'196px', 
		height:'100%', 
		background:'#269bf3',
		display:'block',
		boxShadow:'0px 7px 30px -21px rgba(0,0,0,0.48)'
	},
	contentSectionLeftLinksHeading : {
		fontSize:'14px',
		color:'#fff',
		marginLeft:'10px',
		fontWeight:'bold'
	},
	contentSectionLeftLinksUl : {
		width:'100%', 
		padding:'20px 10px',
		borderBotton:'#ccc solid 1px',
		listStyle:'none'
	},
	contentSectionLeftLinksUlLi : {
		fontSize:'16px',
		color:'#fff',
		margin: '1px 20px 15px 2px'
	},
	link : { 
		fontSize:'14px',
		color:'#fff',
		margin:'10px 0px', 
		textDecoration:'none' 
	},
	divider : {
		background:'#5ab1f3',
		height:'1px', 
		width:'90%', 
		margin:'0 auto'
	},
	tasks : {
		background:'url(http://localhost:8080/img/tasks.png) right no-repeat', 
		marginRight:'20px', 
		
	},
	productUl : {
		width:'100%',
		padding:'20px 5px', 
		borderBotton:'#ccc solid 1px',
		listStyle:'none'
	},
	productUlLi : { 
		fontSize:'16px', 
		color:'#fff',
		margin: '1px 10px 15px 0px', 
		paddingLeft:'20px'
	},
	productUlLiA : { 
		fontSize:'14px', 
		color:'#fff',
		margin:'1px 10px 15px 5px',
		textDecoration:'none',
	
	},
	productHeading : {
		fontSize:'13px',
		fontWeight:'bold',
		color:'#525d6e', 
		marginLeft:'15px',
		marginRight: '20px',
		marginTop:'20px', 
		background:'url(http://localhost:8080/img/product.png) right no-repeat'
	},
	memberData : {
		background:'url(http://localhost:8080/img/member-data.png) left no-repeat',
		marginLeft:'10px', 
		marginRight:'10px'
	},
	tutorials : {
		background:'url(http://localhost:8080/img/tutorials.png) left no-repeat',
		marginLeft:'10px',
		marginRight:'10px'
	},
	analytics : {
		background:'url(http://localhost:8080/img/analytics.png) left no-repeat', 
		marginLeft:'10px',
		marginRight:'10px'
	},
	infographics : {
		background:'url(http://localhost:8080/img/infographics.png) left no-repeat',
		marginLeft:'10px',
		marginRight:'10px'
	},
	messages : {
		background:'url(http://localhost:8080/img/messages.png) right no-repeat', 
		marginRight:'20px', 
		
	},
	integrations : {
		background:'url(http://localhost:8080/img/integrations.png) right no-repeat', 
		marginRight:'20px',
		
	},
	dashboardUl : { 
		width:'100%',
		padding:'20px 5px',
		borderBotton:'#ccc solid 1px',
		liststyle:'none'
	},
	dashboardUlLi : { 
		fontSize:'16px',
		color:'#fff',
		margin: '1px 15px 15px 2px',  
		paddingLeft:'10px'
	},
	dashboardUlLiA : { 
		fontSize:'14px', 
		color:'#fff',
		margin:'10px 0px', 
		textDecoration:'none' 
	},
	paddingLeft: {
		paddingLeft:'0px'
	},
	activeSidebar : {
		backgroundColor: '#1d84d1',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderRadius: '5px'
	},
	maxHeight :{
		height:'100%'
	},
	
	
	menuTab : {
	background:'#269cf4 url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/assets/drop-icon.png) right no-repeat',
	backgroundPosition:'90%',  
	width:'100px',
	color:'#fff', 
	padding:'12px 10px',
	cursor:'pointer',
	display:'block',
	textDecoration:'none'
	},
	
	flip :{
    color: 'white' 
    },
	
		closeTxt : {
	    position: 'absolute',
		color:'#fff',
		fontSize:'13px',
		marginLeft: '145px',
		marginRight:'24px',
		marginTop: '15px', 
		cursor: 'pointer',
		display:'inline-block'
	}
 
}

export default style
