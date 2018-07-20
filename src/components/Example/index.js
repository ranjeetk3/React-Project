import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import Radium from 'radium'
import { connect } from 'react-redux'
import color from 'color'
import styles from '../../styles'

// export the raw component for tests
export class Example extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.defaultState = {
      styles: {
        base: {
          width: '100px',
          height: '100px',
          color: color(styles.indusBlue).lighten(0.5),
          ':hover': {
            color: 'white'
          }
        },
        primary: {
          background: '#0074D9'
        },
        warning: {
          background: '#FF4136'
        }
      }
    }
    this.state = this.defaultState
  }
  componentWillReceiveProps() {
    if (this.props.example.greeting === "hi there!") {
      const newState = Object.assign({}, this.state, {
        styles: Object.assign({}, this.defaultState.styles, {
          primary: Object.assign({}, this.defaultState.styles.primary, {
            background: "green"
          })
        })
      })
      this.setState(newState)
    } else {
      this.setState(this.defaultState)
    }
  }
  handleClick() {
    const { dispatch } = this.props
    dispatch({
      type: 'TOGGLE_EXAMPLE_GREETING'
    })
  }
  render() {
    const { greeting } = this.props.example
    const { styles } = this.state
    return (
      <div style={[ styles.base, styles.primary ]} onClick={(e) => { return this.handleClick(e) }}>
        <div>{greeting}</div>
      </div>
    )
  }
}

Example.propTypes = {
  greeting: PropTypes.string
}

function mapStateToProps(state) {
  return {
    example: state.example
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Example))




