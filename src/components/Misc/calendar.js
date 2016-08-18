import React, { Component } from 'react'



class Calendar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      $('.calendar').kendoCalendar({
        change: function() {
            var view = this.view();
            console.log(view.name); //name of the current view

            var current = this.current();
            console.log(current); //currently focused date
        }

      });
  }

  render() {
    return (
      <div className='calendar'>
        kendo Calendar
      </div>
    )
  }
}

export default Calendar
