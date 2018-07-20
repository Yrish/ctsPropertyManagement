import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupForm from './SignupForm'
import * as actions from '../../actions'

class Signup extends Component {

  onSubmit =(fields) => {
    this.props.signup(fields, () => {
      this.props.history.push('/dashboard')
    }, () => {console.log('failed to signin')})
  }

  render() {
    return (
      <div className="signup">
        <SignupForm onSubmit={(fields) => this.onSubmit(fields)}/>
      </div>
    )
  }
}

export default connect(null, actions)(Signup)
