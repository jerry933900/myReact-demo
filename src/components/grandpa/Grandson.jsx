import React, { Component } from 'react'

import Context from './context'

export default class Grandson extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        data => {
                            return <div>
                                <p style={{color:data}}>我是孙子组件---{data}</p>
                            </div>
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}
