import React, { Component } from 'react'
import classNames from 'classnames'

type Props = {}

export default class TabNav extends Component<Props> {
  render() {

    let activeComponent = <h1>No component selected</h1>

    let tabs = this.props.tabs.map((tab, index) => {
      if (tab.active) {
        activeComponent = tab.component
      }
      return <h2 key={`tab${index}`} className={classNames("tab", tab.active ? "active" : null)} onClick={() => {this.props.onTabSelect(index)}}>{tab.title}</h2>
    })

    return <div className="tab-nav">
      <div className="tabs">{tabs}</div>
      <div className="content">{activeComponent}</div>
    </div>
  }
}
