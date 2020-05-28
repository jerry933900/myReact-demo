import {ADD,MINUS} from './actionType'

/**
 * 该文件就是用来创建我们需要出发的action对象的
 */

export const add = count  => {
    return {
        // type:'ADD',
        type: ADD,
        count
    }
}

export const addAsync = count => {
    return dispatch => {
        setTimeout(() => {
            dispatch(add(count))
        }, 2000);
    }
}

export const minus = count => {
    return {
        // type:'MINUS',
        type: MINUS,
        count
    }
}