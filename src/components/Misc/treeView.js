import React, { Component } from 'react'


class TreeView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.treeview').kendoTreeView({
        animation: {
          collapse: {
            duration: 400
          }
        },
        dataSource:
        [
          {
            text: 'foo', items:
            [
              { 
                text: 'bar' ,
                items:[
                        {
                          text: 'bar2'
                        }
                      ]
               }
              ]
            }
          ]
      })
  }

  render() {
    return (
      <div className='treeview'></div>
    )
  }
}

export default TreeView
