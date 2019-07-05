const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    category: [],
    categoryName: '',
    image: '',
}

const categoryReducer = function(state=initialState, action){
    switch (action.type) {
        case "SET_CATEGORY_NAME":
            return  {...state, categoryName : action.payload};
            break;
        case "SET_IMAGE":
            return  {...state, image: action.payload};
            break;
        case "FETCH_CATEGORY_PENDING":
            return  {...state, fetching:true};
            break;
        case "FETCH_CATEGORY_FULFILLED":
            return  {...state, fetching:false, fetched:true, category:action.payload};
            break;
        case "FETCH_CATEGORY_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
            

        // case "ERR":
        //     throw new Error();
        default:
            break;
    }
    return state;
}


export default categoryReducer;