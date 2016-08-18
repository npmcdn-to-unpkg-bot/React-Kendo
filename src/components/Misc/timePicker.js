import React, { Component } from 'react'


class TimePicker extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.timepicker').kendoTimePicker({
      animation: false
    })
  }

  render() {
    return (
      <input className='timepicker' />
    )
  }
}

export default TimePicker
