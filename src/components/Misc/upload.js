import React, { Component } from 'react'


class FileUpload extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.photos').kendoUpload({
      async: {
          saveUrl: 'http://my-app.localhost/save',
          removeUrl: 'http://my-app.localhost/remove'

      }
      ,autoUpload: false
      ,select: function(e) {
        console.log('files selected ', e.files)
      }
    })
  }

  render() {
    return (
    <input type='file' name='files' className='photos' />
    )
  }
}

export default FileUpload
