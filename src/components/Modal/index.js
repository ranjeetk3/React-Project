// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import color from 'color'

// style
import style from './style'

// exports
export class Modal extends Component {
  constructor(props) {
    super(props)
    this.close = this.close.bind(this)
  }
  close(e) {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch({
      type: "HIDE_MODAL"
    })
  }
  render() {
    
    const { modal } = this.props

    // set base styles
    const modalStyles = [ style.base ]
    const contentStyles = [ style.content.base ]
    const closeButtonStyles = [ style.closeButton.base ]

    // set conditional styles
    if (modal.isShowing) modalStyles.push(style.show)

    switch (modal.type) {
      case "error":
        closeButtonStyles.push(style.showCloseButton)
        break
      default:
        break
    }

    // return render
    return (
      <app-modal style={modalStyles}>
        <content style={contentStyles}>
          <modal-message>{ modal.message }</modal-message>
          <close-button style={ closeButtonStyles } onClick={(e) => { this.close(e) }}>Close</close-button>
        </content>
      </app-modal>
    )
  }
}

Modal.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    modal: state.modal
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Modal))






