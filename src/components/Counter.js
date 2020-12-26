import React, { Component } from 'react'
import UpdateedComp from './HigherOrderComp';

export class Counter extends Component {
    constructor(props){
        super(props);

        this.state={
            count:0
        };
    }

    IncrementCount=()=>{
        this.setState({
            count:this.state.count+1
        });
    };
    render() {
        const {count}=this.state
        return (
            <div>
                <button onMouseMove={
                    this.IncrementCount
                }>{this.props.name} Increamnted to count {count} </button>
            </div>
        )
    }
}

export default UpdateedComp(Counter)