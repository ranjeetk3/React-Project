// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { StyleRoot } from 'radium';

// components
import Modal from '../Modal'

// component
class Stage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyleRoot>
        <stage> 
          {this.props.children}
        </stage>
        <Modal/>
      </StyleRoot>
    )
  }
}

Stage.propTypes = {
}

export default Stage

