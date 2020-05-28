import React, { Component } from 'react'
// import './First.css';

import styles from './First.module.css'

// console.log(styles)

export default class First extends Component {
    render() {
        return (
            <div>
                {/* <p className="test">我是First组件</p> */}

                {/* First_test_1sAhn */}
                <p className={styles.test}>我是First组件</p>
            </div>
        )
    }
}
