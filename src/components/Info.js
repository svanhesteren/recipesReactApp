import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Info extends PureComponent {

  renderMessage = () => {

    if (this.props.loading) {return "Loading recipes from database..."}
    else { return ""}
  }


  render() {
    return (
      <div>
      <h3>{this.renderMessage()}</h3>
      </div>
    )
  }

}

const mapStateToProps = ({loading}) => ({loading})

export default connect(mapStateToProps)(Info)
// export default Info
