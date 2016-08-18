import React, { Component } from 'react'

import {Slider} from '@telerik/kendo-react-inputs'

class SliderContainer extends Component {
  constructor(props) {
            super(props);
            this.state = {
                max: 1000,
                min: 0,
                step: 5,
                value: 5


            }
            this.onChange = this.onChange.bind(this)
        }


        componentDidMount() {

        }

        onChange(e) {
            this.setState({
                value: e.value
            });

        }
        render() {
            return (
              <div>
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    value = {this.state.value}
                />
              </div>
              )
        }
}

export default SliderContainer
