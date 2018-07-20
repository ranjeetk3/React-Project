import Radium from 'radium'

const lyfeKeyframes = Radium.keyframes({
  '0%': {
    transform: 'scaleY(0.4)',
    opacity: '0.8'
  },
  '20%': {
    transform: 'scaleY(1)',
    opacity: '1'
  },
  '40%': {
    transform: 'scaleY(0.4)',
    opacity: '0.8'
  },
  '100%': {
    transform: 'scaleY(0.4)',
    opacity: '0.8'
  },
}, 'pulse');

const baseRectStyle = {
  backgroundColor: '#fff',
  height: '150%',
  width: '10%',
  marginTop: '-20%',
  display: 'inline-block',
  borderRadius: '5px',
  animation: 'x 1.2s infinite ease-in-out',
  animationName: lyfeKeyframes
}

const style = {
  base: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    color: '#333',
    pointerEvents: 'none',
    opacity: 0
  },
  show: {
    opacity: 1,
    pointerEvents: 'all'
  },
  content: {
    base: {
      display: 'flex',
      flexFlow: 'row wrap',
      flex: '1',
      maxWidth: '60vw',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: 'white',
      textAlign: 'center'
    }
  },
  closeButton: {
    base: {
      display: 'block',
      textAlign: 'center',
      width: '100%',
      backgroundColor: '#7DC855',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '30px',
      color: '#fff'
    }
  }
}

export default style
