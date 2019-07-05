// import console = require("console");
import moment from 'moment'

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    notes: [],
    title: '',
    note: '',
    idCategory: 0,
    sort: 'DESC',
    nextPage: '',
    message: [],
    idNotes: null,
    isRefresh: true,
    searchNotes: [],
    search: '',
    pageLimit: 6,
    sideBar: false,


}

const homeReducer = function(state=initialState, action){
    let newNotes = state.notes
    switch (action.type) {
        case "SET_TITLE":
            state = {...state, title:action.payload};
            break;
        case "SET_NOTE":
            state = {...state, note:action.payload};
            break;
        case "SET_NOTES":
            state = {...state, notes:action.payload};
            break;
        case "SET_ID_CATEGORY":
            state = {...state, idCategory:action.payload};
            break;
        case "SET_ID":
            state = {...state, idNotes:action.payload};
            break;
        case "SET_REFRESH":
            state = {...state, isRefresh:false};
            break;
        case "SET_LIMIT":
            state = {...state, pageLimit :action.payload};
            break;
        case "SET_SIDEBAR":
            state = {...state, sideBar :action.payload};
            break;
        case "SET_SEARCH":
            state = {...state, search:action.payload};
            break;
        case "SET_SORT":
            state = {...state, sort: action.payload}
            break;
        case "FETCH_NOTE_PENDING":
            return  {...state, fetching:true};
            break;
        case "FETCH_NOTE_FULFILLED":
            // console.log(action.payload.data.note.next_Page)
            return  {...state, fetching:false, fetched:true, isRefresh:false, nextPage: action.payload.data.note.next_Page, notes:action.payload.data.data};
            break;
        case "FETCH_NOTE_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        case "GET_SEARCH_PENDING":
            return  {...state, fetching:true};
            break;
        case "GET_SEARCH_FULFILLED":
            let data = []
            if(action.payload.data.data !== "empty"){
                data = action.payload.data.data
            }
            return  {...state, fetching:false, fetched:true, isRefresh:false, nextPage: action.payload.data.note.next_Page, searchNotes:data};
            break;
        case "GET_SEARCH_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        case "ADD_NOTE_PENDING":
            return  {...state, fetching:true};
            break;
        case "ADD_NOTE_FULFILLED":
            
            let newELement = {
                id: action.payload.data.row.insertId,
                title: action.payload.data.parameter[0],
                note: action.payload.data.parameter[1],
                time: new Date(),
                category: action.payload.data.parameter2[0]['category'],
                id_category: action.payload.data.parameter[2],
                color: action.payload.data.parameter2[0]['color']
            }
            // console.log(action.payload.data.parameter2[0]['category'])
            // console.log(action.payload.data.parameter[2])
            // console.log(action.payload.config.data[0]["note"])
            // console.log("id3"+action.payload.config.data[0]['title'])
            let element = [newELement].concat(newNotes)
            return  {...state, notes:element, fetching:false, message:action.payload};
            break;
        case "ADD_NOTE_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        case "EDIT_NOTE_PENDING":
            return  {...state, fetching:true};
            break;
        case "EDIT_NOTE_FULFILLED":
            return  {...state, fetching:false, idNotes:null ,message:action.payload};
            break;
        case "EDIT_NOTE_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        case "DELETE_NOTE_PENDING":
            // console.log("reducer"+action.payload.index)
            return  {...state, fetching:true};
            break;
        case "DELETE_NOTE_FULFILLED":
            // let newNotes = state.notes
            // console.log("hihay", action.payload.data.parameter[0])
            let index = newNotes.findIndex(function(item, i){
                if(item.id == action.payload.data.parameter[0]){
                    console.log(i)
                    return i
                }
            });
            console.log("hihay", index)
            if(index == -1){
                index = 0 
            }
            newNotes.splice(index, 1)
            return  {...state, fetching:false, notes:newNotes ,message:action.payload};
            break;
        case "DELETE_NOTE_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        case "DELETE":
            return  state.notes.splice(action.index, 1);
            break;
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