import React, { Component } from 'react'



class Editor extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.editor').kendoEditor({
          deserialization: {
              custom: function(html) {
                  return html.replace(/(<\/?)b(\s?)/, '$1strong$2');
              }
          }
          ,messages: {
            fontSize: '20'
          }
      })
   }

  render() {
    return (
      <textarea className='editor'></textarea>
    )
  }
}

export default Editor
