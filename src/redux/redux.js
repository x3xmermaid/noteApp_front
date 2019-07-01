import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'

// const reducer = function(state, action){
//     if(action.type == 'INC'){
//         return state + action.payload
//     }
//     return 'unknown '
// }

// const initialState = {
//     fetching: false,
//     fetched: false,
//     error: null,
//     note: []
// }

// const homeReducer = function(state=initialState, action){
//     switch (action.type) {
//         case "TITLE":
//             state = {...state, title:action.payload};
//             break;
//         case "SET_NOTE":
//             state = {...state, note:action.payload};
//             break;
//         case "FETCH_NOTE_PENDING":
//             return  {...state, fetching:false};
//             break;
//         case "FETCH_NOTE_FULFILLED":
//             return  {...state, fetching:false, fetched:true, note:action.payload};
//             break;
//         case "FETCH_NOTE_REJECTED":
//             return  {...state, fetching:false, error: action.payload};
//             break;
//         // case "ERR":
//         //     throw new Error();
//         default:
//             break;
//     }
//     return state;
// }

const noteReducer = function(state=initialState, action){
    return state;
}

// const reducers = combineReducers({
//     home: homeReducer,
//     note: noteReducer
// })

// const logger = (store)=>(next)=>(action)=>{
//     console.log('logger middleware called');
//     // action.type = "SET_NOTE"
//     next(action);
// }

// const error = (store)=>(next)=>(action)=>{
//     try {
//         next(action);
//     } catch (error) {
//         console.log('IRRORr');
//     }
// }



store.subscribe(() => {
    console.log('store changed ', store.getState());
})

// store.dispatch({
//     type: 'FECTH_NOTE',
//     payload: axios.get('http://192.168.6.120:3001/notes').then((res)=>res.data.note)
// })
// store.dispatch((dispatch) => {
//     dispatch({type: 'FETCH_NOTE_PENDING'});
//     axios.get('http://192.168.6.120:3001/notes').then(
//         (response)=>{
//             dispatch({type: 'FETCH_NOTE_FULFILLED', payload: response.data.data})
//         }
//     ).catch((err)=>{
//         dispatch({type: 'FETCH_NOTE_REJECTED', payload: err})
//     })

    // dispatch({type: 'TITLE'})
    // dispatch({type: 'NOTE'})
// })
// store.dispatch({type: "SET_TITLE", payload: "MERMAIo"});
// store.dispatch({type: "ERR"});
// store.dispatch({type: "SET_NOTE", payload: "4 YOU"});
// store.dispatch({type: "INC", payload: 10});