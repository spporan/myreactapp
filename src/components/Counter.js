import React, { Component } from 'react'

export default class Counter extends Component {
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
                }>Increamnted to count {count} </button>
            </div>
        )
    }
}
