import React, { Component } from 'react'
import startA from './star_a.png'
import startB from './star_b.png'

export class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Please, Star my github repository.",
             sub:"Star",
             imageUrl:startB

        }
    }
    
    styles={
        fontStyle:"italic",
        color:"purple",
      }

      ButtonChanged=()=>{
          this.setState({
              sub:"Unstart",
              message:"Unstar to the github repository.",
              
          });
      }
      OnIconChange=()=>{
          this.setState({
              imageUrl:startA,
              message:"Thank You ! Happy learning."
          });
      }

    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChanged}>{this.state.sub}</button>
                <p/>
                <img src={this.state.imageUrl} alt="" onClick={this.OnIconChange}/>
            </div>
        )
    }
}

export default NewComp
