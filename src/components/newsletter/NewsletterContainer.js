import React, { Component } from 'react'
import { connect } from 'react-redux'
import Archive from './Archive'
import Newsletter from './Newsletter'

export default class NewsLetterContainer extends Component {
  render() {
    return (
      <div className="newsletter-container">
        <div>add button</div>
        <Archive title="Archive"/>
        <Newsletter />
      </div>
    )
  }
}
