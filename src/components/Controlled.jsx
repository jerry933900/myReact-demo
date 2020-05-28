import React, { Component } from 'react'

export default class Controlled extends Component {
    // constructor(){
    //     super()

    //     this.state = {
    //         username:'',
    //         password:''
    //     }
    // }

    // 定义好模型
    state =  {
        username:'',
        password:''
    }

    login = e => {
        e.preventDefault()
        console.log('登录...',this.state)
    }

    /** 
    changeUsername = e => {
        // console.log(e.target.value)
        console.log(e.target)

        this.setState({
            username:e.target.value
        })
    }

    changePassword = e => {
        console.log(e.target)
        this.setState({
            password: e.target.value
        })
    }
    */

    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                受控组件Demo
                <form onSubmit={this.login}>
                    {/* 未优化之前的
                    <label htmlFor="">用户名</label>
                    <input value={this.state.username} onChange={this.changeUsername} type="text"/><br/>
                    <label htmlFor="">密码</label>
                    <input value={this.state.password} onChange={this.changePassword} type="password"/><br/> */}

                    <label htmlFor="">用户名</label>
                    <input value={this.state.username} name="username" onChange={this.changeValue} type="text"/><br/>
                    <label htmlFor="">密码</label>
                    <input value={this.state.password} name="password" onChange={this.changeValue} type="password"/><br/>

                    <input type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}
