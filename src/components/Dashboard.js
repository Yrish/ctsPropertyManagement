import React, { Component } from 'react'

import TabNav from './TabNav'

export default class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tabs: [
        {
          title: "Newsleter",
          active: true,
          component: <h2>An amazing newsletter</h2>
        },
        {
          title: "Requests",
          active: false,
          component: <h2>An urgent request</h2>
        }
      ]
    }
  }

  onTabSelect = (index) => {
    let tabs = this.state.tabs
    tabs.forEach((tab) => {
      tab.active = false
    })
    tabs[index].active = true
    this.setState({tabs})
  }

  render() {
    return (
      <div className='dashboard'>
        <TabNav tabs={this.state.tabs} onTabSelect={this.onTabSelect}/>
      </div>
    )
  }
}
