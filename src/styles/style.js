import fontAwesome from '../../'
const style = {
  base: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    appearance: 'none',
    border: 'none',
    background: '#1E90FF',
    padding: '12px 16px',
    borderRadius: '3px',
    color: '#FFF',
    fontSize: '16px',
    alignSelf: 'flex-end',
    outline: 'none',
    cursor: 'pointer',
    ':active': {
        boxShadow: '0px 0px 10px rgba(0,0,0,0.4) inset'
    }
  }
}

export default style