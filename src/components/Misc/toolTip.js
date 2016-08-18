import React, { Component } from 'react'


class ToolTip extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      $('.toolTip').kendoTooltip({
        content: 'Tooltip content!'
        ,position: 'Center'
      })

  }

  render() {
    return (
      <div className='toolTip'>
            this text will have tooltip
      </div>
    )
  }
}

export default ToolTip
