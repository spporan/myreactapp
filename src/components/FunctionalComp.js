import React from "react";

function FunctionalComp(props){
    return <div>
         <p>Hello from {props.title}</p>
         <p>{props.children}</p>
    </div>
}

export default FunctionalComp;
