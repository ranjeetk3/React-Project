import Radium from 'radium'

const keyframe1 = Radium.keyframes({
  '0%': {
    height: '0px',
    marginTop: '0'
  },
  '10%': {
    height: '20px',
    marginTop: '-10px'
  },
  '50%': {
    height: '20px',
    marginTop: '-10px'
  },
  '60%': {
    height: '0px',
    marginTop: '0'
  },
  '100%': {
    height: '0px',
    marginTop: '0'
  }
});

const keyframe2 = Radium.keyframes({
  '0%': {
    height: '0px',
    marginTop: '0'
  },
  '10%': {
    height: '0px',
    marginTop: '0'
  },
  '20%': {
    height: '30px',
    marginTop: '-15px'
  },
  '60%': {
    height: '30px',
    marginTop: '-15px'
  },
  '70%': {
    height: '0px',
    marginTop: '0'
  },
  '100%': {
    height: '0px',
    marginTop: '0'
  }
});

const keyframe3 = Radium.keyframes({
  '0%': {
    height: '0px',
    marginTop: '0'
  },
  '20%': {
    height: '0px',
    marginTop: '0'
  },
  '30%': {
    height: '15px',
    marginTop: '-7.5px'
  },
  '70%': {
    height: '15px',
    marginTop: '-7.5px'
  },
  '80%': {
    height: '0px',
    marginTop: '0'
  },
  '100%': {
    height: '0px',
    marginTop: '0'
  }
});

const keyframe4 = Radium.keyframes({
  '0%': {
    height: '0px',
    marginTop: '0'
  },
  '30%': {
    height: '0px',
    marginTop: '0'
  },
  '40%': {
    height: '20px',
    marginTop: '-10px'
  },
  '80%': {
    height: '20px',
    marginTop: '-10px'
  },
  '90%': {
    height: '0px',
    marginTop: '0'
  },
  '100%': {
    height: '0px',
    marginTop: '0'
  }
});

const keyframe5 = Radium.keyframes({
  '0%': {
    height: '0px',
    marginTop: '0'
  },
  '40%': {
    height: '0px',
    marginTop: '0'
  },
  '50%': {
    height: '35px',
    marginTop: '-17.5px'
  },
  '90%': {
    height: '35px',
    marginTop: '-17.5px'
  },
  '100%': {
    height: '0px',
    marginTop: '0'
  }
});

const style = {
		 base: {
				},
    logoAnimation: {
        width: '60px',
        height: '60px',
        background: '#2ca0f7',
        position: 'relative',
        borderRadius: '100%',
        WebkitBoxShadow: "rgba(0, 0, 0, 0.74902) 0px 1px 5px -1px",
        MozBoxShadow: "rgba(0, 0, 0, 0.74902) 0px 1px 5px -1px",
        boxShadow: "rgba(0, 0, 0, 0.74902) 0px 1px 5px -1px"
    },
    row: {
        position: 'absolute',
        background: '#fff',
        display: 'inline-block',
        top: '50%'
    },
    row1: {
        background: '#fff',
        width: '5px',
        height: '20px',
        left: '10px',
        borderRadius: '10px',
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        animationName: keyframe1
    },
    row2: {
        background: '#fff',
        width: '5px',
        height: '30px',
        left: '18px',
        borderRadius: '10px',
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        animationName: keyframe2

    },
    row3: {
        background: '#fff',
        width: '5px',
        height: '15px',
        left: '26px',
        borderRadius: '10px',
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        animationName: keyframe3
    },
    row4: {
        background: '#fff',
        width: '5px',
        height: '20px',
        right: '21px',
        borderRadius: '10px',
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        animationName: keyframe4
    },
    row5: {
        background: '#fff',
        width: '5px',
        height: '35px',
        right: '13px',
        borderRadius: '10px',
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        animationName: keyframe5
    }
}

export default style
