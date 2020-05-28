import React, { Component } from 'react'

import './Login.css'

export default class Login extends Component {
    state = {
        username:'',
        password:''
    }

    handleLogin = e => {
        e.preventDefault()

        console.log(this.state)

        const {username,password} = this.state

        if (username==='admin' && password==='123') {
            // 跳转到layout页面

            // 编程式导航
            this.props.history.push('/layout')
        }
    }

    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {username,password} = this.state
        return (
            <div className="loginContainer">
                <form onSubmit={this.handleLogin}>
                    <label htmlFor="">用户名:</label>
                    <input value={username} name="username" onChange={this.changeValue} type="text"/><br/>
                    <label htmlFor="">密码:</label>
                    <input value={password} name="password" onChange={this.changeValue} type="password"/><br/>
                    <input type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}
