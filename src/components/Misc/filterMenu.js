import React, { Component } from 'react'



class FilterMenu extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      var data = [
        { name: 'Jane Doe', age: 30 },
        { name: 'John Doe', age: 33 }
      ];

      var dataSource = new kendo.data.DataSource({
        data: data
      });

      $('.filter-menu').kendoFilterMenu({
        dataSource: dataSource,
        field: 'name',
        messages: {
            and: 'and',
            // or: 'or',
            filter: 'Apply filter',
            clear: 'Clear filter'
          }
      });

      $('.grid').kendoGrid({
        columns: [
          { field: 'name' },
          { field: 'age' }
        ],
        dataSource: dataSource
        ,scrollable: true
      })
   }

  render() {
    return (
      <div>
      <div className='filter-menu'></div>
          <br /><br />
      <div className='grid'></div>
      </div>
    )
  }
}

export default FilterMenu
