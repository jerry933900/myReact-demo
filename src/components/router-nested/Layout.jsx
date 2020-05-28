import React, { Component } from 'react'
import './Layout.css'

import {Link,Route,Switch,Redirect} from 'react-router-dom'

function Menu1(){
    return <div style={{color:'red',fontSize:30}}>
        我是组件1
    </div>
}

function Menu2(){
    return <div style={{color:'purple',fontSize:20}}>
        i am component 2
    </div>
}

export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="left">
                    <p>
                        <Link to="/layout/menu1">菜单1</Link>
                    </p>
                    <p>
                        <Link to="/layout/menu2">菜单2</Link>
                    </p>
                </div>
                <div className="right">
                    <Switch>
                        <Route path="/layout/menu1" component={Menu1}/>
                        <Route path="/layout/menu2" component={Menu2}/>
                        <Redirect exact from="/layout" to="/layout/menu1"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
