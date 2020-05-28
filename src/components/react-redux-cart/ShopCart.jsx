import React, { Component } from "react";

import { Table, InputNumber, Button,Modal } from "antd";

import {connect} from 'react-redux'

import {updateGoods,asyncDeleteGoods} from './store/actionCreator'

const { Column } = Table
const { confirm } = Modal

class ShopCart extends Component {
  constructor(props) {
    super();

    const initialGoodsList = props.list;
    initialGoodsList.forEach(item => {
      item.key = item.id;
    });

    this.state = {
      goodsList: initialGoodsList
    };
  }

  // 删除
  handleDelete = id => {
    confirm({
      title: '提示',
      content: '确认删除吗?',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk: () => {
        this.props.delete(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    const initialGoodsList = nextProps.list;
    initialGoodsList.forEach(item => {
      item.key = item.id;
    });

    this.state = {
      goodsList: initialGoodsList
    };
  }

  render() {
    const { goodsList } = this.state;
    return (
      <div>
        <Table dataSource={goodsList} pagination={false}>
            <Column title="名字" dataIndex="name" key="name" />
            <Column title="图片" dataIndex="url" key="url" render={url => (
                <img width="100" height="80" src={url}/>
            )}/>
            <Column title="数量" render={record => (
                 <InputNumber onChange={value => {
                     // 分两步写，第一步，调用 Input 本身的OnChange,获取到最新的数量
                     // 再调用我自定义的方法，拿到最新的数据和 id
                    //  console.log(value)
                    
                    this.props.update(record.id,value)
                 }} defaultValue={record.num}/>
                // <InputNumber onChange={(value) => this.getChangeNum(record.id,value)} defaultValue={record.num}/>
            )}/>
            <Column title="单价" dataIndex="price" key="price" />
            <Column title="总价" render={record => <span>{record.price * record.num}</span>}/>
            <Column title="操作" render={record => <Button onClick={() => this.handleDelete(record.id)} type="danger">删除</Button>}/>
        </Table>
      </div>
    );
  }
}

export default connect(state => {
  return {
    list: state
  }
},dispatch => {
  return {
    // 修改商品
    update(id,num){
      // 触发修改商品的action
      dispatch(updateGoods({id,num}))
    },
    delete(id) {
      // 触发删除商品的异步action
      dispatch(asyncDeleteGoods(id))
    }
  }
})(ShopCart)
