// dependencies
import globalStyles from '../../styles'

const style = {
  container: {
    base: {
      display: 'flex',
      position: 'relative',
      fontSize: '10px',
      color: '#fff',
      borderRadius: '3px',
      padding: '4px 6px',
      fontFamily: globalStyles.fonts.base,
      backgroundColor: 'rgba(0,0,0,0.7)',
      top: '4px',
      height: '0px',
      marginTop: '0px',
      opacity: 0,
      pointerEvents: 'none',
      transform: 'translateY(-20px)',
      transition: 'all ease-out 0.4s'
    },
    floating: {
      position: 'absolute',
      left: '0px',
      bottom: '-90%'
    },
    error: {
      backgroundColor: 'rgba(255,0,0,1)'
    },
    show: {
      pointerEvents: 'all',
      opacity: 1,
      transform: 'translateY(0px)',
      height: 'inherit',
    },
    topLeft: {
      left: '0px',
      top: '0px'
    }
  },
  message: {
    base: {
    }
  },
  arrow: {
    base: {
      display: 'none',
      position: 'absolute',
      borderWidth: '8px',
      borderStyle: 'solid',
      borderTopColor: 'rgba(0, 0, 0, 0)',
      borderLeftColor: 'rgba(0, 0, 0, 0)',
      borderRightColor: 'rgba(0, 0, 0, 0)',
      borderBottomColor: 'rgba(0, 0, 0, 0)'
    },
    error: {
      borderBottomColor: 'rgba(255,0,0,1)',
    },
    topLeft: {
      display: 'block',
      top: '-16px',
      left: '8px'
    }
  }
}

export default style