import React, { Component } from 'react'
import { connect } from 'react-redux'

type Props = {}

class HeaderWrapper extends Component<Props> {
  render() {
    return (
      <div className="header-wrapper">
        <h1 className="header-wrapper-title">Welcome to HOA Manager!</h1>
        <p className="header-wrapper-subtitle">please login to continue</p>
        {this.props.children || null}
      </div>
    )
  }
}

export default connect()(HeaderWrapper)
