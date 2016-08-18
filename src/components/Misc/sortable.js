import React, { Component } from 'react'


class Sortable extends Component {
  constructor(props) {
    super(props)

    this.handleCss = this.handleCss.bind(this)
  }

  componentDidMount() {
     $('.listA').kendoSortable({
         connectWith: '.listB'
         ,cursor: 'move'
     })

     $('.listB').kendoSortable({
         connectWith: '.listA'
          ,cursor: 'move'
     })

     this.handleCss()
  }

  handleCss() {
    // it is important to have the min-height to ensure the an emplty
    $('.listA').css({'display':'inline-block','min-height': '20px'})
    $('.listB').css({'display':'inline-block','min-height': '20px'})
  }

  render() {
    return (
      <div>
          <ul className='listA'>
            <li>ItemA1</li>
            <li>ItemA2</li>
            <li>ItemA3</li>
            <li>ItemA4</li>
            <li>ItemA5</li>
            <li>ItemA6</li>
          </ul>

          <ul className='listB'>
            <li>ItemB1</li>
            <li>ItemB2</li>
            <li>ItemB3</li>
            <li>ItemB4</li>
            <li>ItemB5</li>
            <li>ItemB6</li>
          </ul>
      </div>
    )
  }
}

export default Sortable
