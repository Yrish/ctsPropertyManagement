import React, {Component} from 'react'
import classNames from 'classnames'

export class FormInput extends Component {
  render() {
    const {className, title, input, type, placeHolder} = this.props
    return (
      <div className={classNames(className, 'form-input')}>
        <label className='form-input-title'>{title}</label>
        <input className='form-input-field' type={type} {...input} placeholder={placeHolder}/>
      </div>
    )
  }
}

export class FormButton extends Component {
  render() {
    const {className, title, input, type} = this.props
    return (
      <div className='form-button'>
        <button className={classNames(className, 'form-button-button')} type={type} {...input} >
          {title}
        </button>
      </div>
    )
  }
}
