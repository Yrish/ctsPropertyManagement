import React, { Component } from 'react'
import { connect } from 'react-redux'
import Archive from './Archive'

export default class NewsLetterContainer extends Component {
  render() {
    return (
      <div className="newsletter-container">
        <div>add button</div>
        <Archive title="Archive"/>
        <div>content</div>
      </div>
    )
  }
}
