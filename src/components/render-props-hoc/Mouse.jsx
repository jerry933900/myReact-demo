import React, { Component } from 'react'

export default class Mouse extends Component {
    state = {
        x:0,
        y:0
    }

    handleMouseMove = e => {
        // console.log(e)
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.handleMouseMove)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.handleMouseMove)
    }

    render() {
        return (
            <div>
                鼠标的位置是:{this.state.x}---{this.state.y}
            </div>
        )
    }
}
