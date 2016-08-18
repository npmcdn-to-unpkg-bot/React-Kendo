import React, { Component } from 'react'



class ColorPicker extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.colorpicker').kendoColorPicker({
      palette:[ '#000', '#333', '#666', '#999', '#ccc', '#fff', 'red', 'purple', 'lightblue', 'pink', 'aqua' ]
      ,columns: 4  // number of columns
       ,tileSize : {width: 20}
       ,tileSize : {height: 20}
       ,value: '#333' // default selected value after loading
      ,change:function(e) {
        console.log('current color', e.value)
      }
      ,
      messages: {
        apply: 'Update'
        ,cancel: 'Discard'
      }
    })
  }

  render() {
    return (
      <div className='colorpicker'>

      </div>
    )
  }
}

export default ColorPicker
