import React, { Component } from 'react'

class Login extends Component{
    render(){
        return <div>
            <form action="">
                用户名:<input type="text"/><br/>
                密码:<input type="text"/><br/>
                <button>登录</button>
            </form>
        </div>
    }
}

class Welcome extends Component{
    render(){
        return <div>欢迎您登录</div>
    }
}

export default class IFFor extends Component {
    state = {
        isLogin: false,
        persons: [
            {id:1001,name:'段正淳',address:'大理王国'},
            {id:1002,name:'成昆',address:'光明顶暗道'},
            {id:1003,name:'张无忌',address:'光明顶'},
            {id:1004,name:'赵敏',address:'大都'},
            {id:1005,name:'尼古拉斯.赵四',address:'大都'}
        ]
    }
    render() {
        // if (!this.state.isLogin) {
        //     return <Login />
        // } else {
        //     return <Welcome/>
        // }

        // return this.state.isLogin ? <Welcome /> : <Login />
        return <div>
            {/* {this.state.isLogin && <Welcome />}
            {!this.state.isLogin && <Login />} */}

            <ul>
                {
                    this.state.persons.map(item => {
                        return <li key={item.id}>{item.name}---{item.address}</li>
                    })
                }
            </ul>
        </div>
    }
}
