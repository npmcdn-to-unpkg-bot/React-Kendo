import React, { Component } from 'react'



class PanelBar extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
        $('.panelbar').kendoPanelBar({
          animation: {
              // fade-out closing items over 1000 milliseconds
              collapse: {
                  duration: 1000
              },
             // fade-in and expand opening items over 500 milliseconds
             expand: {
                 duration: 500
             }
         }
         ,
         select: function(e) {
           console.log(e)
         }
      })
   }



  render() {
    return (
    <div>
    <ul className='panelbar'>
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

export default PanelBar
