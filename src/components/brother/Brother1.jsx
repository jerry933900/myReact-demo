import React, { Component } from 'react'

import bus from './bus'

export default class Brother1 extends Component {
    state = {
        name: '韦小宝',
        age: 280,
        address: '恭王府'
    }

    sendValue = () => {
        // 传值
        bus.emit('myevent',this.state)
    }

    render() {
        return (
            <div>
                <p>我是brother1</p>
                <button onClick={this.sendValue}>发送数据到brother2</button>
            </div>
        )
    }
}
