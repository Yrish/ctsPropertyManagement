import React from 'react'
import classNames from 'classnames'

export function FormTitle(props) {
  return (<div className={classNames("form-header-layout", props.className)}>
    <h1>{props.title}</h1>
  </div>)
}
