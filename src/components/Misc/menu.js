import React, { Component } from 'react'


class Menu extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.menu').kendoMenu({
        animation:
              {
                open: { effects: 'fadeIn', duration:1000 }
                ,close: { effects: 'fadeOut', duration:1000 }
              }
         ,select: function(e) {
           console.log('selected item' , e.item.innerText)
         }
    })

    $('.menu').css('background-color','lightblue')
    $('.menu').css('width','50%')
  }

  render() {
    return (
      <div>
      <ul className='menu'>
        <li>Item 1
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
        <li>Item 2
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
                <li>Sub Item 3</li>
            </ul>
        </li>
      </ul>

      </div>
    )
  }
}

export default Menu
