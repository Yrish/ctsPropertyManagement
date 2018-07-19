import React, { Component } from 'react'
import { connect } from 'react-redux'
import SigninForm from './SigninForm'

class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <SigninForm />
      </div>
    )
  }
}

export default connect()(Signin)
