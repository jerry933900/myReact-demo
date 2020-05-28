import React, { Component } from 'react'

import Mouse from './Mouse'
import Cat from './Cat'

import Common from './Common'
import Common2 from './Common2'

import catImg from './cat.jpg'

// import {HashRouter as Router} from 'react-router-dom'

// import TestRouter from './TestRouter'

import HOC from './HOC'

export default class Index extends Component {
    render() {
        return (
            <div>
                {/* <Mouse /> */}
                {/* <Cat /> */}

                {/* <Common abc={(x,y) => {
                    return <div>
                        当前鼠标的位置是 --- {x} - {y}
                    </div>
                }}/> */}


                {/* <Common render={(x,y) => {
                    return <div>
                        <img src={catImg} style={{width:100,height:80,position:'absolute',left:x - 50,top:y-40}} alt=""/>
                    </div>
                }}/> */}

                {/* <Common2 children={(x,y) => {
                    return <div>
                        <img src={catImg} style={{width:100,height:80,position:'absolute',left:x - 50,top:y-40}} alt=""/>
                    </div>
                }}/> */}

                {/* <Common2>
                    {
                       (x,y) => {
                            return <div>
                                <img src={catImg} style={{width:100,height:80,position:'absolute',left:x - 50,top:y-40}} alt=""/>
                            </div>
                        } 
                    }
                </Common2> */}

                <HOC/>
            </div>
        )
    }
}
