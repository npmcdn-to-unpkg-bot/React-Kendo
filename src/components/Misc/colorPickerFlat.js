import React, { Component } from 'react'



class ColorPicker extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.flatpicker').kendoFlatColorPicker({
        opacity: true
        ,buttons: true
        ,value: 'yellow'
        ,preview: true
        ,autoupdate: true
        ,messages: {
          apply: 'Update',
          cancel: 'Discard'
        }
        ,change: function(e) {
          console.log('The selected flat color is: ' + this.value())
        }
    })
  }

  render() {
    return (
      <div className='flatpicker'>

      </div>
    )
  }
}

export default ColorPicker
