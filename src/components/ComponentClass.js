import React from "react";

export class FirstComponentCls extends React.Component{

    render(){
        return <p>I am comming from class  {this.props.compName}</p>;

    }
}

export class SecondComponentCls extends React.Component{

    render(){
        return <div>
            <p>I am comming from class Component from 2</p>
            <p>{this.props.children}</p>
        </div>;

    }
}
