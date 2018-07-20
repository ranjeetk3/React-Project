// dependencies
import globalStyles from '../../styles'
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
    background: color(globalStyles.colors.indusBlue).lighten(0.1).rgbString()
  },
  content: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '90vw',
    maxWidth: '420px'
  },
  header: {
    display: 'flex',
    flex: '1 100%',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 20px',
    margin: '10px 0px'
  },
  logo: {
    maxWidth: '300px'
  },
  title: {
    fontSize: '5vh',
    fontWeight: '300',
    color: '#FFF',
    textAlign: 'center',
    margin: '30px 0px 20px'
  },
  message: {
    display: 'block',
    fontSize: '16px',
    color: '#FFF',
    textAlign: 'center',
    margin: '10px 0px 0px',
    lineHeight: '22px'
  }
}

export default style