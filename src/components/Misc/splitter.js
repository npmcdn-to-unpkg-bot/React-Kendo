import React, { Component } from 'react'


class Splitter extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.splitter').kendoSplitter({
      panes: [ { resizable: true }, { resizable: true }, { resizable: false } ]
      ,orientation: 'vertical'
      })
  }

  render() {
    return (
      <div className='splitter'>
          <div>Pane A</div>
          <div>Pane B</div>
          <div>Pane C</div>
      </div>
    )
  }
}

export default Splitter
