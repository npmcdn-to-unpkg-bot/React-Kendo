import React, { Component } from 'react'


class Widget extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // initialize the widget
  $(".myWindow").kendoWindow( { /*...*/ } );

  // get the wrapper
  var winWrapper = $(".myWindow").data("kendoWindow").wrapper; // returns div.k-window as a jQuery object

  }

  render() {
    return (
    <div className="myWindow">...window content...</div>
    )
  }
}

export default Widget
