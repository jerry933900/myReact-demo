/**
 * 就是导出的一个纯函数
 * 
 * 纯函数
 *      给定固定输入，得到固定的输出
 *      没有副作用
 * 
 * num就相当于 Vuex 中 state 0 是仓库中 num的初始值
 * 
 * action 对象
 *      {
 *          type: 必须,
 *          xxx: yyy, 可选
 *          zzz: aaaa 可选
 *      }
 */
import {ADD,MINUS} from './actionType'

export default (num = 5,action) => {
    console.log(action)
    switch (action.type) {
        // case 'ADD':
        case ADD:
            return num + action.count

        // case 'MINUS':
        case MINUS:
            return num - action.count
    
        default:
            return num
    }
}