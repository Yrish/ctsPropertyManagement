import React, { Component } from 'react'
import { connect } from 'react-redux'

class Signup extends Component {
  render() {
    return (
      <div className="signup">Signup Component</div>
    )
  }
}

export default connect()(Signup)
