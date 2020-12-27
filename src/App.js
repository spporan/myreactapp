import React, { Component } from 'react';
import './App.css';
import NewComp from './state/NewComp'

 class App extends Component {

   styles={
     fontStyle:"bold",
     color:"teal",
     fontSize:"20px"
   }
 

  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome to <b>REACT</b></h1>
        <NewComp></NewComp>
      </div>
    )
  }
}





export default App;
