import React from 'react'

import './Second.css'

class Second extends React.Component {
    color = '白色'
    static address = '地球'

    constructor(){
        // 只要继承，就必须在第一句调用super方法，固定写法
        super()

        // 相当于Vue中的 data
        this.state = {
            name: '黄伟'
        }

        this.clickMe = this.clickMe.bind(this)
    }

    clickMe2() {
        console.log("11111111111",this)

        // this.state.name = '666'
    }

    clickMe3 = () => {
        // 父组件传递过来的值，是只读的，不要修改
        // this.props.obj =  {}

        // console.log(this.props.obj)

        // 更改state中name的值
        // this.state.name = '666'

        // 更改模型的这个方法是异步的
        this.setState({
            name:'666'
        },() => {
            console.log(this.state.name)
        })
    }

    clickMe4(name) {
        // 更改模型的这个方法是异步的
        this.setState({
            name
        },() => {
            console.log(this.state.name)
        })
    }

    clickMe = name  => {
        this.setState({
            name
        })
    }

    render() {
        return (
            <>
                <div className="testp">
                    <p>这个是用来测试的...</p>
                    <p>我还是一个好人...{this.state.name}</p>
                    {/* <button onClick={this.clickMe.bind(this,'张三丰')}>更改name</button> */}
                    {/* <button onClick={this.clickMe}>更改name</button> */}

                    <button onClick={() => this.clickMe('李四')}>更改name</button>
                </div>
            </>
        )
    }
}

export default Second