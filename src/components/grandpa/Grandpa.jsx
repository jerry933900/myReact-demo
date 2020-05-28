import React, { Component } from 'react'

import Son from './Son'
import Context from './context'

export default class Grandpa extends Component { 
    state = {
        color:'red'
    }


    changeColor = color => {
        this.setState({
            color
        })
    }

    render() {
        return (
            <div>
                <p style={{color:this.state.color}}>我是爷爷组件</p><br/>
                <button onClick={() => this.changeColor('red')}>红色</button> &nbsp; <button onClick={() => this.changeColor('purple')}>紫色</button><br/>

                <Context.Provider value={this.state.color}>
                    <Son />
                </Context.Provider>
            </div>
        )
    }
}
