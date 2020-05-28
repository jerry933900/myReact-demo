import React, { Component } from 'react'

import GrandSon from './Grandson'

import Context from './context'

export default class Son extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        data => {
                           return <div>
                                <p style={{color:data}}>我是儿子组件---{data}</p>
                                <GrandSon />
                           </div>
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}
