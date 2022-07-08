import React, { Component } from "react"

const style_sub = {
    height: '150px'
}

class SubContent extends Component{
    render(){
        return(
            <div style={style_sub} className="bg-warning m-2 w-100"></div>
        );
    }
}

export default SubContent