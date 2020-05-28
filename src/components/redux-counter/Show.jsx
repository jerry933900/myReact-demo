import React, { Component } from 'react'

import store from './store'

export default class Show extends Component {
    constructor(){
        super()

        this.state = {
            count: store.getState()
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            console.log("----------------")
            this.setState({
                count: store.getState() // 重新获取仓库中的值
            })
        })
    }
    
    render() {
        return (
            <div>
                Show页面 {this.state.count}
            </div>
        )
    }
}
