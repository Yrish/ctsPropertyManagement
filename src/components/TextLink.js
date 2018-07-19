import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default class TextLink extends Component {
  render() {

    const {to, text, className} = this.props

    return (
      <Link to={to} className={classNames(className, 'text-link')}>
        {text}
      </Link>
    )
  }
}
