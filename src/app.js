import React,{Component} from "react"
import Ccc from "./compon/ccc"
import Ddd from "./compon/ddd"
 
import {Button} from "antd"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:"12312312",
            newsBa:123123
         }
    }
    render() { 
        
        return (
        <div className="abc">
           <div className="csf" onClick={this.goToDo}>123123123</div>
           <Ccc data = {this.state.data} onClick={this.show}/>
           <Ddd newsBa = {this.state.newsBa}/>
           <Button>21321312</Button>
        </div>
        );
    }
    componentDidMount(){
      console.log(this.props.store.getState()) 
    }
    goToDo=()=>{
     this.props.store.dispatch({
         action:"asds",
         data:""
     })
     console.log(this.props.store.getState())
    }
    show=()=>{
     
    }
}
 
export default App;