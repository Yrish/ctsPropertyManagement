import React, { Component } from 'react'
import { FormTitle } from '../formTitle'
import { reduxForm, Field} from 'redux-form'
import { FormInput, FormButton } from '../formFields'
import TextLink from '../TextLink'

class SignupForm extends Component {

  render() {

    const { handleSubmit } = this.props

    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormTitle title="New User" className='signup-form-title'/>
        <Field component={FormInput} name='name' type='text' className="signup-form-name" title="Full Name" placeHolder="Full Name" />
        <Field component={FormInput} name='unit' type='text' className="signup-form-unit" title="Unit #" placeHolder="Unit Number" />
        <Field component={FormInput} name='email' type='email' className="signup-form-email" title="Email" placeHolder="Email" />
        <Field component={FormInput} name='password' type='password' className="signup-form-password" title="Password" placeHolder="Password" />
        <Field component={FormButton} name='createAccount' type='submit' className="signup-form-create-account" title="Create Account" />
        <div className="signup-form-text-links">
          <TextLink to='/signin' text='Already Registered? Login' />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(SignupForm)
