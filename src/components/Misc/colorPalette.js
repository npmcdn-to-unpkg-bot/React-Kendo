import React, { Component } from 'react'



class ColorPalette extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $(".palette").kendoColorPalette({
      palette:[ "#000", "#333", "#666", "#999", "#ccc", "#fff", 'red', 'purple', 'lightblue', 'pink', 'aqua' ]
      ,columns: 2  // number of columns
      ,tileSize : {width: 50}
      ,tileSize : {height: 32}
      ,change:function(e) {
        console.log('current color', e.value)
        $('.palette').css('background-color', e.value)
      }
    })

    var palette = $(".palette").data("kendoColorPalette");
    palette.enable(true)


  }

  render() {
    return (
      <div className='palette'>

      </div>
    )
  }
}

export default ColorPalette
