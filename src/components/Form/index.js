import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars

export class Form extends Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  handleKeyPress(e) {
    if (e.nativeEvent.keyCode == 13) {
      e.preventDefault()
      return this.submit()
    }
  }
  render() {
    return (
      <form onKeyPress={(e) => { return this.handleKeyPress(e) }}>
        { this.props.children }
      </form>
    )
  }
}

Form.propTypes = {
}

export default Form




