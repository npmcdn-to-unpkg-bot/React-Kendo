import React, { Component } from 'react'



class MaskedTextbox extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.maskedtextbox').kendoMaskedTextBox({
      mask: '(000)-000-0000',
      value: ''
    })
  }

  render() {
    return (
      <input className='maskedtextbox' />
    )
  }
}

export default MaskedTextbox
