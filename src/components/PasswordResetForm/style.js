const style = {
  base: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 100%',
    maxWidth: 360,
    background: 'none'
  },
  line: {
    marginBottom: '6px'
  },
  input: {
    background: 'none',
    borderRadius: '20px',
    borderTop: '1px solid rgba(255,255,255,0.7)',
    borderRight: '1px solid rgba(255,255,255,0.7)',
    borderBottom: '1px solid rgba(255,255,255,0.7)',
    borderLeft: '1px solid rgba(255,255,255,0.7)',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '15px',
    padding: '12px 16px',
    letterSpacing: '1px',
    fontWeight: '500'
  },
  submitButton: {
    display: 'block',
    width: '100%',
    background: '#7DC855',
    borderRadius: '20px',
    border: 'none',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '15px',
    padding: '12px 16px',
    letterSpacing: '1px',
    fontWeight: '300',
    marginTop: '30px'
  },
  placeholder: {
    'input::-webkit-input-placeholder': {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: '300'
    },
    'input:-moz-placeholder': {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: '300'
    },
    'input::-moz-placeholder': {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: '300'
    },
    'input:-ms-input-placeholder': {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: '300'
    },
    'input:focus::-webkit-input-placeholder': {
      color: 'rgba(255,255,255,0)'
    },
    'input:focus:-moz-placeholder': {
      color: 'rgba(255,255,255,0)'
    },
    'input:focus::-moz-placeholder': {
      color: 'rgba(255,255,255,0)'
    },
    'input:focus:-ms-input-placeholder': {
      color: 'rgba(255,255,255,0)'
    }
  },
	loader:{
		background: 'rgba(0, 0, 0, 0.4)',
		width: '100%',
		display: 'block',
		height: '100%',
		minHeight: '1010px',
		position: 'absolute',
		zIndex:'999'
	},
	loaderImage: {
		margin: '0 auto',
		top: '40%',
		zIndex:'999'
	},
}

export default style