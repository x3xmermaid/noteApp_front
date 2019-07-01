const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    notes: []
}

const homeReducer = function(state=initialState, action){
    switch (action.type) {
        case "TITLE":
            state = {...state, title:action.payload};
            break;
        case "SET_NOTE":
            state = {...state, note:action.payload};
            break;
        case "FETCH_NOTE_PENDING":
            return  {...state, fetching:true};
            break;
        case "FETCH_NOTE_FULFILLED":
            return  {...state, fetching:false, fetched:true, notes:action.payload};
            break;
        case "FETCH_NOTE_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        // case "ERR":
        //     throw new Error();
        default:
            break;
    }
    return state;
}
// const homeReducer = function(state=initialState, action){
//     switch (action.type) {
//         case "TITLE":
//             state = {...state, title:action.payload};
//             break;
//         case "SET_NOTE":
//             state = {...state, note:action.payload};
//             break;
//         case "FETCH_NOTE_PENDING":
//             return  {...state, fetching:true};
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

export default homeReducer;