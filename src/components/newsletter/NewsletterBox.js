import React, { Component } from 'react'

const MONTH_CONVERTER = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function({date}) {
  return (
    <div className="newsletter-box">
      <div className="day">{date.getDate()}</div>
      <div className="month-year">{`${MONTH_CONVERTER[date.getMonth()]} ${date.getFullYear()}`}</div>
      <div className="arrow"/>
    </div>
  )
}
