import React, { Component } from 'react'

export default class NewsDetail extends Component {
    constructor(props){
        super()

        /**
         * query传参获取值
         * 
        const searchParams = new URLSearchParams(props.location.search)
        console.log(searchParams.get('newsId'))

        this.state = {
            newsId: searchParams.get('newsId')
        }
         */

         /**
          * params传参获取值
          */

          this.state = {
            newsId: props.match.params.newsId
          }
    }

    render() {
        return (
            <div>
                我是新闻详情组件---{this.state.newsId}
            </div>
        )
    }
}
