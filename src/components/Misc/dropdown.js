import React, { Component } from 'react'



class DropDownList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.dropdownlist').kendoDropDownList({
        dataSource: ['One', 'Two'],
        animation: {
         close: {
           effects: 'fadeOut zoom:out',
           duration: 300
         },
         open: {
           effects: 'fadeIn zoom:in',
           duration: 300
         }
        }
        ,
        change: function(e) {
          console.log('current dropdownlist item is ' + this.value() )
        }
     })
   }

  render() {
    return (
      <input className='dropdownlist' />
    )
  }
}

export default DropDownList
