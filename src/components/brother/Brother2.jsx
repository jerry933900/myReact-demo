import React, { Component } from 'react'
import bus from './bus'

export default class Brother2 extends Component {
    state = {}
    // Vue mounted
    componentDidMount(){
        // console.log("---componentDidMount---")
        bus.on('myevent',data => {
            // console.log(data)
            this.setState(data)
        })
    }

    render() {
        return (
            <div>
                我是brother2---{this.state.name}---{this.state.address}
            </div>
        )
    }
}
