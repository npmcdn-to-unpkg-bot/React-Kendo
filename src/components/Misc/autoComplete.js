import React, { Component } from 'react'



class AutoComplete extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var data =
            [
                { id: 1, name: "Apples" },
                { id: 2, name: "Oranges" },
                { id: 3, name: "Zapples" }
            ]
      $(".autocomplete").kendoAutoComplete({
          dataSource: data,
          dataTextField: "name",
          change: function(e) {
            console.log(this.value())
          }
      })
  }

  render() {
    return (
      <div>
          <input className='autocomplete' />
      </div>
    )
  }
}

export default AutoComplete
