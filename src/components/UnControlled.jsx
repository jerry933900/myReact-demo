import React, { Component } from 'react'

export default class UnControlled extends Component {
    constructor() {
        super()

        this.inputRef = React.createRef()
    }

    componentDidMount(){
        // document.getElementById('inputId').focus()

        // 旧的写法
        // console.log(this.refs.inputRef)
        // this.refs.inputRef.focus()

        // 新的写法
        // console.log(this.inputRef.current)
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                {/* <input id="inputId" type="text"/> */}

                {/* 旧的写法 */}
                {/* <input ref="inputRef" type="text"/> */}

                {/* 新的写法 */}
                <input name="inputName" ref={this.inputRef} type="text"/>
            </div>
        )
    }
}
