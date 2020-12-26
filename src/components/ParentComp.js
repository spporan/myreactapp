import React, { Component } from 'react'
import PureComp from './PureComp'
import RegulComp from './RegulComp'

 class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"I'm Shah Paran"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState={
                name:"I'm Shah Paran"
            }
        },3000);
    }
    render() {
        console.log("Parent rendered...")
        return (
            <div>
                I'm parent Component
                <PureComp name={this.state.name}/>
                <RegulComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
