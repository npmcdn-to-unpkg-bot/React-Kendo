import React, { Component } from 'react'



class MultiSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {data: [{label:'first', id:1},{label:'second', id:2},{label:'third', id:3}]}
  }

  componentDidMount() {
      $('.multiselect').kendoMultiSelect({
        autoBind: true
        ,dataSource: this.state.data
        ,dataTextField:'label'
        ,dataValueField: 'id'
        ,animation :
        {
          open:
          {
            effects: 'zoom:in',
            duration: 300
          }
          ,
          close:
          {
            effects: 'zoom:out',
            duration: 100
          }
        }
        ,change: function(e) {
          console.log('current value: ' + this.value()) // all the selected values are returned as comma delimited
        }
      })
   }

  render() {
    return (
      <select className='multiselect' multiple='multiple'>
      </select>
    )
  }
}

export default MultiSelect
