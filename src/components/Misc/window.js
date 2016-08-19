import React, { Component } from 'react'


class Window extends Component {
  constructor(props) {
    super(props)

    this.state = {iDiv:[], oldPos:[]}

    this.openNewWindow = this.openNewWindow.bind(this)
  }

  componentDidMount() {

    var iDiv = document.createElement('div');
    iDiv.id = 'main';
    iDiv.className = 'main';
    document.getElementsByTagName('body')[0].appendChild(iDiv);
    this.setState({iDiv: iDiv})
    $(".main").kendoWindow({
      actions: [ "Close" ]
      ,height: 'auto'
      ,width: '80%'

      ,dragend: function(e) {

        console.log(this.options.position)
        //console.log('this',this)

      }
      ,position: {
        top: 50
        ,left:185
      }
    })

    $('.main').css('background-color','aqua')

  }

  openNewWindow() {
    var thisInstance = this

    // document.getElementsByTagName('body')[0].appendChild(iDiv)

    var innerDiv = document.createElement('div');
    innerDiv.className = 'dialog';
    thisInstance.state.iDiv.appendChild(innerDiv);
    thisInstance.setState({iDiv: this.state.iDiv})

    $(".dialog").kendoWindow({
      actions: [  "Close" ]
      ,height: '40%'
      ,width: '40%'
      ,activate: function(e)
      {

        thisInstance.state.oldPos = {top:this.options.position.top,left:this.options.position.left,changed:false}
        thisInstance.setState({oldPos: thisInstance.state.oldPos})
        console.log('activate', thisInstance.state.oldPos);
      }
      ,dragstart: function(e) {
        if(thisInstance.state.oldPos.changed == false) {
          thisInstance.state.oldPos = {top:this.options.position.top,left:this.options.position.left,changed:true}
          thisInstance.setState({oldPos: thisInstance.state.oldPos})

        }
          console.log('dragstart', thisInstance.state.oldPos)
      }
      ,dragend: function(e) {
        //console.log(this.options.position)
        var oldPos = this.options.position
        if(this.options.position.left < 18) {
          console.log('dragend', thisInstance.state.oldPos)
          this.setOptions({
            position: {
              left: thisInstance.state.oldPos.left
              ,top: thisInstance.state.oldPos.top
              // ,top: thisInstance.state.oldPos.top
            }
          })

        }
        thisInstance.state.oldPos.changed = false
        thisInstance.setState({oldPos: thisInstance.state.oldPos})
      }
      // ,position: {
      //   top: 100
      //   ,left:185
      // }
    });

  }

  render() {
    return (
      <div id='mainDiv'>
          <button onClick={this.openNewWindow}>Open window</button>
      </div>
    )
  }
}

export default Window
