import {createStore,applyMiddleware,compose} from 'redux'

import thunk from 'redux-thunk'

// 导入 reducers
import reducer from './reducer'

// 创建仓库
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
)

// 导出仓库
export default store