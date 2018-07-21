import React, { Component } from 'react'
import { connect } from 'react-redux'
import SigninForm from './SigninForm'
import * as actions from '../../actions'

class Signin extends Component {

  onSubmit = (fields) => {
    this.props.signin(fields, () => {this.props.history.push('/dashboard')}, () => {
      console.log("failed to signin")
    })
  }

  render() {
    return (
      <div className="signin">
        <SigninForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default connect(null, actions)(Signin)
