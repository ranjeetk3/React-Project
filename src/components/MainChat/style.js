import Radium from 'radium'

const style = {
	mainChatWrapper: {
	display:'block',
		'@media screen and (max-width:767px)': {
			display:'none',
		}
	},
	mobileChatWrapper:{
	 display:'none',
		'@media screen and (max-width:767px)': {
			display:'block',
		}
	}
}
export default style
