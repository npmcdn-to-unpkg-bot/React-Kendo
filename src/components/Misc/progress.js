import React, { Component } from 'react'


class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var element = $('.prog');
    kendo.ui.progress(element, true)
  }

  render() {
    return (
      <div className='prog'>
        kendo progress

      </div>
    )
  }
}

export default ProgressBar
