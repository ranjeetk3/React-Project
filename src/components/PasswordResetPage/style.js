// dependencies
import color from 'color'

const style = {
  page: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/lyferx-web/images/backgrounds/auth-bg-01-mobile.jpg")'
    
  },
  content: {
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: '360px',
    height: '100%'
  },
  header: {
    core: {
      display: 'flex',
      flex: '1 100%',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px 20px',
      margin: '10px 20px 0px'
    },
    logo: {
      maxWidth: '300px'
    },
    title: {
      fontSize: '8vh',
      fontWeight: '300',
      color: '#FFF',
      textAlign: 'center',
      margin: '20px 0px 0px'
    },
    instructions: {
      fontSize: '2vh',
      color: '#FFF',
      textAlign: 'center'
    }
  },
  body: {
    core: {
      display: 'flex',
      flex: '1 0px',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px 20px',
      margin: '10px 20px'
    },
    formContainer: {
      padding: '1vh 0px'
    },
    login: {
      core: {
        display: 'block',
        fontSize: '2vh',
        color: '#FFF',
        textAlign: 'center',
        margin: '10px 0px 0px'
      },
      link: {
        fontSize: '2vh',
        color: '#FFF',
        textAlign: 'center'
      }
    }
  },
  footer: {

  }
}

export default style