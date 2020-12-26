
import React ,{Component} from 'react'


export class Click extends Component{
constructor(props){
    super(props);

    this.state={
        count:0
    };
}

 UpdateCount=()=>{
    this.setState({
        count:this.state.count+1
    });
};
    render(){
        const {count}=this.state;
        return( <di>
            <button onClick={this.UpdateCount}>Click {count} times</button>
             </di>);
    }
}

export default Click