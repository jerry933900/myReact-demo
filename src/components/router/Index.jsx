import React, { Component } from 'react'

import FoodList from './FoodList'
import NewsList from './NewsList'
import NewsDetail from './NewsDetail'
import NotFound from './NotFound'

import { HashRouter as Router, Link, Route,Redirect,Switch } from 'react-router-dom'

export default class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <p>
                        <span><Link to="/newslist">新闻列表</Link></span>&nbsp;&nbsp;
                        <span><Link to="/foodlist">食品列表</Link></span>
                    </p>
                    <hr/>
                    <Switch>
                        {/* <Route exact path="/" component={FoodList}/> */}
                        <Route path="/foodlist" component={FoodList}/>
                        <Route path="/newslist" component={NewsList}/>
                        {/* query传参 */}
                        {/* <Route path="/newsdetail" component={NewsDetail}/> */}

                        {/* params传参 */}
                        <Route path="/newsdetail/:newsId" component={NewsDetail}/>
                        
                        <Redirect exact from="/" to="/foodlist"/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
