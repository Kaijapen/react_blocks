import React, { Component } from "react"

class Main extends Component{
    render(){
        return(
            <div className="w-100 bg-danger">
                {this.props.children}
            </div>
        );
    }
}

export default Main;