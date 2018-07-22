import React, { Component } from 'react'
import NewsletterBox from './NewsletterBox'

export default class Archive extends Component {
  render () {
    const {title} = this.props
    return (
      <div className='newsletter-archive'>
        <NewsletterBox date={new Date()}/>
        <div className='past'>
          <div className='title'>{title}</div>
          <div className='collection'>
            <ArchiveItem title='happy holidays' date={new Date()}/>
          </div>
        </div>
      </div>
    )
  }
}


function ArchiveItem({title, date}) {
  return (
    <div className='item'>
      <div className='title'>
        {title}
      </div>
      <div className='date'>
        {date.getMonth() + 1}/
        {date.getDate()}/
        {String(date.getFullYear()).slice(2,4)}
      </div>
    </div>
  )
}
