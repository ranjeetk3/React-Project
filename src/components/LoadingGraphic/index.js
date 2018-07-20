// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import color from 'color'

// style
import style from './style'

// exports
export class LoadingGraphic extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { type } = this.props
    const styles = [ style.base ]
    let graphic
    switch (type) {
      case 'logo':
        graphic = <lyfe-animation style={style.lyfe.container}>
          <div style={style.lyfe.rect1}></div>
          <div style={style.lyfe.rect2}></div>
          <div style={style.lyfe.rect3}></div>
          <div style={style.lyfe.rect4}></div>
          <div style={style.lyfe.rect5}></div>
        </lyfe-animation>
        break
      default:
        graphic = <div>Loading...</div>
        break
    }
    return (
      <loading-graphic style={styles}>
        { graphic }
      </loading-graphic>
    )
  }
}

LoadingGraphic.propTypes = {
  type: PropTypes.string
}

// the default export is the redux-connected component
export default Radium(LoadingGraphic)




