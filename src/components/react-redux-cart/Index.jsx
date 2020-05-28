import React, { Component } from 'react'
import './Index.css'
import styles from './Index.module.css'

import GoodsList from './GoodsList'
import ShopCart from './ShopCart'

// 建立当前组件 Index 和 store的关系
import { connect } from 'react-redux'

import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super()

        let total = 0
        props.goodsList.forEach(item => {
            total += item.num
        })

        this.state = {
            count: total
        }
    }

    componentDidMount(){
        window.addEventListener('beforeunload',() => {
            window.localStorage.setItem('cache_goodslist',JSON.stringify(this.props.goodsList))
        })
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload',() => {})
    }

    componentWillReceiveProps(nextProps){
        let total = 0
        nextProps.goodsList.forEach(item => {
            total += item.num
        })

        this.setState({
            count: total
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <h2 className={styles.title}>redux-demo-商城
                        <p className={styles.links}>
                            <Link to="/goodslist">商品列表</Link>&nbsp;&nbsp;
                            <Link to="/cart">购物车{this.state.count > 0 && <span>（{this.state.count}）</span>}</Link>
                        </p>
                    </h2>
                    <div>
                        <Switch>
                            <Route path="/goodslist" component={GoodsList}/>
                            <Route path="/cart" component={ShopCart}/>
                            <Redirect exact from="/" to="/goodslist"/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

/**
 * state 就是仓库中的state，就是最新值
 * 该函数触发的时机是，只要仓库中的值发生了变化
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    console.log("--------",state)
    // 返回的对象就会赋值给 Index 的 props
    return {
        goodsList: state
    }
}

export default connect(
    mapStateToProps,
    null
  )(Index)