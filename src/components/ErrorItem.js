import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ErrorItem extends PureComponent {

  renderError = () => {
    return this.props.loaderror
  }


  render() {
    return (
      <div>
      <h3 id="errorItem">{this.renderError()}</h3>
      </div>
    )
  }

}
const mapStateToProps = ({loaderror}) => ({loaderror})

export default connect(mapStateToProps)(ErrorItem)
