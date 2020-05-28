import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component{
    constructor(props){
        super()

        this.state = {
            count: props.initCount
        }
    }

    // 类型约束
    static propTypes = {
        // initCount: PropTypes.number.isRequired

        initCount: PropTypes.number
    }

    // 指定 props 的默认值
    static defaultProps = {
        initCount: 5
    }

    add = () => {
        // this.props.initCount ++

        this.setState({
            count: ++this.state.count
        }, () => {
            // 执行回调函数
            this.props.callback(this.state.count)
        })
    }

    render() {
        return <div>
            <span>{this.state.count}</span>
            <button onClick={this.add}>+1</button>
        </div>
    }
}

// 指定 props 的默认值：
// Counter.defaultProps = {
//     initCount: 5
// }
