import {combineReducers} from 'redux'

import homeReducer from './notes'

const reducers = combineReducers({
    home: homeReducer,
    // note: noteReducer
})

export default reducers