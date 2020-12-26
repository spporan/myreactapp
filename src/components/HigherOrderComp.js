import React from "react";

const UpdateedComp=(OrginalComp)=>{

    class NewComp extends React.Component{
        render(){
            return <OrginalComp name="The user"/>;
        }
    }
    return NewComp;
};
export default UpdateedComp;