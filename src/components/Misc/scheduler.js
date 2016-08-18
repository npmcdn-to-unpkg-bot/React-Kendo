import React, { Component } from 'react'


class Scheduler extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.scheduler').kendoScheduler({
      date: new Date('2013/6/6'),
      allDayEventTemplate: $('#event-template').html(),
      dataSource: [
        {
          id: 1,
          start: new Date('2013/6/6 08:00 AM'),
          end: new Date('2013/6/6 09:00 AM'),
          isAllDay: true,
          title: 'Interview',
          attendees: [1,2]
        }
      ],
      resources: [
        {
          field: 'attendees',
          dataSource: [
           { value: 1, text: 'Alex' },
           { value: 2, text: 'Bob' }
          ],
          multiple: true
        }
      ]
      ,dataBinding: function(e) {
        // this method is useful for saving data using e.items array
        console.log('databinding',e.items)
      }

    })
  }

  render() {
    return (
      <div className='scheduler'></div>
    )
  }
}

export default Scheduler
