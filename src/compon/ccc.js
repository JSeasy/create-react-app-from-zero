import React, { Component } from "react";
 
class Ccc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillReceiveProps(){
        console.log(112312312)
    }
    render() { 
        return ( 
            <div className="ccc">
                {
                    this.props.data
                }
            </div>
         );
    }
    componentDidMount(){
   
    }
}
 
export default Ccc;