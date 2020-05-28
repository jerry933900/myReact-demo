import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class NewsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {/* query传参 */}
                    {/* <li><Link to="/newsdetail?newsId=10001">返程高峰期，注意安全</Link></li>
                    <li>全国大范围降温，注意保暖</li>
                    <li><Link to="/newsdetail?newsId=10007">莫雷,go to dead</Link></li> */}

                    {/* params传参 */}
                    <li><Link to="/newsdetail/10001">返程高峰期，注意安全</Link></li>
                    <li>全国大范围降温，注意保暖</li>
                    <li><Link to="/newsdetail/10007">莫雷,go to dead</Link></li>
                </ul>
            </div>
        )
    }
}
