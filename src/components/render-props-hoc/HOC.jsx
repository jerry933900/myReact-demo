import React, { Component } from 'react'

import catImg from './cat.jpg'

/**
 * 
 * 高阶组件就是一个函数
 * 接收一个组件作为参数
 * 返回一个增强后的组件
 * 
 * @param {*} WrappedComponent 这个代表是传入的组件
 */
function withCoordinate(WrappedComponent){
    return class extends Component {
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
            return <WrappedComponent x={this.state.x} y={this.state.y}/>
        }
    }
}

class Mouse extends Component{
    render() {
        return <div>
            鼠标的位置是 -- {this.props.x} - {this.props.y}
        </div>
    }
}

class Cat extends Component{
    render() {
        return <div>
            <img src={catImg} style={{width:100,height:80,position:'absolute',left:this.props.x - 50,top:this.props.y - 40}} alt=""/>
        </div>
    }
}

// 调用高阶组件，传入一个普通的组件，给你返回一个增强后的组件
const EnhancedMouse = withCoordinate(Mouse)
const EnhancedCat = withCoordinate(Cat) 

export default class HOC extends Component {
    render() {
        return (
            <div>
                {/* 111 */}
                <EnhancedMouse />
                <EnhancedCat />
            </div>
        )
    }
}
