import React, { Component } from 'react'



class ComboBox extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.parent').kendoComboBox({
    dataTextField: 'parentName',
    dataValueField: 'parentId',
    dataSource: [
        { parentName: 'Parent1', parentId: 1 },
        { parentName: 'Parent2', parentId: 2 }
    ]
    ,value:'select something' // default value
  })

  $('.child').kendoComboBox({
    cascadeFrom: 'parent',
    dataTextField: 'childName',
    dataValueField: 'childId',
    dataSource: [
        { childName: 'Child1', childId: 1, parentId: 1 },
        { childName: 'Child2', childId: 2, parentId: 2 },
        { childName: 'Child3', childId: 3, parentId: 1 },
        { childName: 'Child4', childId: 4, parentId: 2 }
    ]
  })

  }

  render() {
    return (
      <div className='comboBox'>
          <input className='parent'/>
          <input className='child'/>
      </div>
    )
  }
}

export default ComboBox
