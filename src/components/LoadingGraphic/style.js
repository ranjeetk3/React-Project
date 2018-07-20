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
  },
  lyfe: {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'stretch',
      margin: '0px auto 0px 12px',
      width: '20px',
      height: '16px',
      textAlign: 'center',
      fontSize: '10px'
    },
    rect1: baseRectStyle,
    rect2: Object.assign({}, baseRectStyle, {
      animationDelay: '-1.1s'
    }),
    rect3: Object.assign({}, baseRectStyle, {
      animationDelay: '-1.0s'
    }),
    rect4: Object.assign({}, baseRectStyle, {
      animationDelay: '-0.9s'
    }),
    rect5: Object.assign({}, baseRectStyle, {
      animationDelay: '-0.8s'
    }),
  }
}

export default style
