import React, { Component } from 'react'



class NumericTextbox extends Component {
  constructor(props) {
    super(props)

    this.setValueToCurrenvy = this.setValueToCurrenvy.bind(this)
  }

  componentDidMount() {
    $('.numerictextbox').kendoNumericTextBox({
          //change event fires when the user gets out of the control
          change: function(e) {
            console.log('selected numeric value ' + this.value() + ' '+ kendo.toString(this.value(), 'c'))
            this.setValueToCurrenvy(this.value())
          }
          ,
          //change event fires when the user uses spinner to change the value
          spin: function() {
            console.log('selected numeric value by spinner ' + this.value() + ' '+ kendo.toString(this.value(), 'c'))
            this.setValueToCurrenvy(this.value())
          }
          ,min: -5
          ,max: 5
          ,format: 'c2'
          ,value: kendo.toString(0,'c2')
      })
   }

   //setting the format to currency
   setValueToCurrenvy(val) {
       var numerictextbox = $('.numerictextbox').data('kendoNumericTextBox')
       numerictextbox.value(kendo.toString(val,'c2'))
   }

  render() {
    return (
    <input className='numerictextbox' />
    )
  }
}

export default NumericTextbox
