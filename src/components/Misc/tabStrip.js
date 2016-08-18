import React, { Component } from 'react'


class TabStrip extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.tabstripbyJson').kendoTabStrip({
      value: 'Tab1',
     dataTextField: 'Name',
     dataContentField: 'Content',
     dataSource: [
       { Name: 'Tab1', Content: 'Tab1: content' },
       { Name: 'Tab2', Content: 'Tab2: content' }
     ]
    })


    $('.tabstriplistItem').kendoTabStrip({
        animation: {
            close: {
                duration: 200,
                effects: 'fadeOut'
            }
        }
    })

    var tabToActivate = $('.tab1')
    $('.tabstriplistItem').kendoTabStrip().data('kendoTabStrip').activateTab(tabToActivate) // setting the default tab
  }

  render() {
    return (
      <div>
          <div className='tabstripbyJson'>

          </div>
          <br />
          <div className='tabstriplistItem'>
              <ul>
                  <li className='tab1'>Tab 1</li>
                  <li>Tab 2</li>
              </ul>
              <div>Content 1</div>
              <div>Content 2</div>
          </div>
      </div>
    )
  }
}

export default TabStrip
