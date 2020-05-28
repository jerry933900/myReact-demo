import React, { Component } from 'react'

export default class Common extends Component {
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
        // 父组件给我传递要显示的内容，你让我显示啥，我就显示啥
        return this.props.render(this.state.x,this.state.y)
    }
}
