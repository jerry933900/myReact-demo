import React, { Component } from 'react'
// import './Second.css'

import styles from './Second.module.css'
console.log('Second',styles)

export default class Second extends Component {
    render() {
        return (
            <div>
                {/* <p className="test">我是Second组件</p> */}
                <p className={styles.test}>我是Second组件</p>
            </div>
        )
    }
}
