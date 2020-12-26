
import React, { Component } from 'react'


 class PureComp extends Component {
   
    render() {
        console.log("Pure rendered...")

        return (
            <div>
                I'm pure Component  {this.props.name}
            </div>
        )
    }
}

export default PureComp
