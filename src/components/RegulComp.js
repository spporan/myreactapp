import React, { Component } from 'react'

 class RegulComp extends Component {
    render() {
        console.log("Regular rendered...")

        return (
            <div>
                I'm regular Component {this.props.name}
            </div>
        )
    }
}

export default RegulComp
