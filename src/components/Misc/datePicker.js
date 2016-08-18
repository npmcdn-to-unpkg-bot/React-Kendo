import React, { Component } from 'react'



class DatePicker extends Component {
  constructor(props) {
    super(props)

    this.state = {value: 'select'}
  }

  componentDidMount() {
    var thisInstance = this
    $('.datepicker').kendoDatePicker({
        change: function(e) {
          // console.log('the selected data is ' +  this.value())
          thisInstance.setState({value: this.value()})
          // console.log('the selected state data is ' +  thisInstance.state.value)
        }
        ,
        value: thisInstance.state.value
         ,format: 'M/d/yy'
         ,min: '1/1/2013'
         ,max: '12/12/2016'
        ,animation: {
           close: {
             effects: 'fadeOut zoom:out',
             duration: 300
           },
           open: {
             effects: 'fadeIn zoom:in',
             duration: 300
           }
          }
      })
  }

  render() {
    return (
      <input className='datepicker'/>

    )
  }
}

export default DatePicker
