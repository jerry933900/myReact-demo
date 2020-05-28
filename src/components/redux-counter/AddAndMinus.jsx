import React, { Component } from 'react'
import store from './store'

import {add,addAsync,minus} from './store/actionCreator'

export default class AddAndMinus extends Component {

    handleMinus = () => {
        // store.dispatch({
        //     type:'MINUS',
        //     count: 3
        // })

        store.dispatch(minus(3))
    }

    handleAdd = () => {
        // store.dispatch({
        //     type:'ADD',
        //     count: 2
        // })

        // 同步的action
        // store.dispatch(add(2))

        store.dispatch(addAsync(5))
    }

    render() {
        return (
            <div>
                加和减页面<br/>
                <button onClick={this.handleMinus}>-3</button>&nbsp;&nbsp;<button onClick={this.handleAdd}>+2</button>
            </div>
        )
    }
}
