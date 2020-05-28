import React, { Component } from 'react'

export default class Life extends Component {
    /**
     * 初始化阶段  相当于 created
     */
    constructor(){
        super()

        console.log("11111111111")

        this.state = {
            name: '乔峰'
        }
    }

    /**
     * 初始化阶段  相当于 beforeMount 可以发送网路请求
     */
    componentWillMount(){
        console.log('---componentWillMount---')
    }

    /**
     * 初始化阶段 初次渲染
     * 运行阶段，当数据发生了变化，再次渲染
     */
    render() {
        console.log("-------render--------")
        return (
            <div>
                姓名是：{this.state.name}<br/>
                <button onClick={() => this.setState({name:'乔杉'})}>更改name</button>
            </div>
        )
    }

    
    /**
     * 初始化阶段  相当于 mounted 可以发送网路请求、操作dom
     */
    componentDidMount(){
        console.log("-------componentDidMount--------")
    }

     /**
     * 运行阶段 当父组件传递过来的数据发生了改变
     */
    componentWillReceiveProps(props){
        console.log(`-------componentWillReceiveProps----`,props)
    }

    /**
     * 运行阶段 是否需要更新组件，默认不实现是 true
     * 
     * 这个地方返回true还是false，看数据是否发生了改变
     */
    shouldComponentUpdate(){
        console.log('---shouldComponentUpdate---')
        return true
    }

    /**
     * 运行阶段 相当于 beforeupdate 组件即将更新
     */
    componentWillUpdate(){
        console.log('---componentWillUpdate---')
    }

    /**
     * 运行阶段 相当于 updated 组件更新完毕
     */
    componentDidUpdate(){
        console.log('---componentDidUpdate---')
    }   

    /**
     * 卸载阶段
     */
    componentWillUnmount(){
        console.log('---componentWillUnmount---')
    }
}
