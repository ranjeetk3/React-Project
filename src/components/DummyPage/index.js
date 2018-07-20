import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'

// exports
export class DummyPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { currentPage } = this.props
    return (
      <dummy-page style = { style.wrapper }>
        {currentPage.currentPage}
      </dummy-page>
    )
  }
}

DummyPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    currentPage: state.dummyPage
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(DummyPage))
