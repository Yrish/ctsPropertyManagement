import React, { Component } from 'react'
import { FormTitle } from '../formTitle'
import { reduxForm, Field} from 'redux-form'
import { FormInput, FormButton } from '../formFields'
import TextLink from '../TextLink'

class SigninForm extends Component {

  render() {
    const { handleSubmit } = this.props
    return (
      <form className="signin-form" onSubmit={handleSubmit}>
        <FormTitle title="login" className='signin-form-title'/>
        <Field component={FormInput} name='email' type='email' className="signin-form-email" title="Email" placeHolder="Enter Email" />
        <Field component={FormInput} name='password' type='password' className="signin-form-password" title="Password" placeHolder="Enter Password" />
        <Field component={FormButton} name='login' type='submit' className="signin-form-login" title="Login" />
        <div className="signin-form-text-links">
          <TextLink to='/forgot' text='Forgot Password'/>
          <TextLink to='/signup' text='Not a member? Register Here' />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm)
