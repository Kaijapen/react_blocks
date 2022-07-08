import React, { Component } from "react"

const style_adv = {
    background: '#b4a7d6',
    height: '100px'
}

class Advertisement extends Component{
    render(){
        return(
            <div style={style_adv} className="p-5 m-2"></div>
        );
    }
}

export default Advertisement