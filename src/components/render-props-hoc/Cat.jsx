import React, { Component } from 'react'

import catImg from './cat.jpg'

export default class Cat extends Component {
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
        const {x,y} = this.state
        return (
            <div>
                <img src={catImg} style={{width:100,height:80,position:'absolute',left:x - 50,top:y-40}} alt=""/>
            </div>
        )
    }
}
