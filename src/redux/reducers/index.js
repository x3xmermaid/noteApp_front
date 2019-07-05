import {combineReducers} from 'redux'

import homeReducer from './notes'
import categoryReducer from './category'

const reducers = combineReducers({
    home: homeReducer,
    category: categoryReducer
})

export default reducers