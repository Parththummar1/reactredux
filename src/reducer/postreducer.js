import { FETCH_POST, SELCTED_POST,DELETE_POST } from './../Actions/Post/type';
const initialstate = {
    posts :[],
    selectedpost : {}
};
const postreducer = (state = initialstate, action) => {
    switch(action.type){
        case FETCH_POST :
            return { ...state,posts:action.payload}
        case SELCTED_POST :
            return { ...state,selectedpost:action.payload}
        case DELETE_POST :
            return { ...state,selectedpost:action.payload}
        default:
            return state;
    }
    
}

export default postreducer;