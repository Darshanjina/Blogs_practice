import { ADD_POST , GET_ALL_POST, UPDATE_POST, DELETE_POST, GET_SORTED_POST } from '../action/type';

const initialState = {
    addPost:"",
    allPosts:[],
    updatePost:"",
    deletePost:"",
    sortedPost:[]
}

export default function(state = initialState , action){
    switch(action.type){
        case ADD_POST :
            return{
                ...state,
                addPost:action.payload
            }
        case GET_ALL_POST :
            return{
                ...state,
                allPosts:action.payload
            }
        case UPDATE_POST:
            return{
                ...state,
                updatePost:action.payload,
            }
        case DELETE_POST:
            return{
                ...state,
                deletePost:action.payload,
            }
        case GET_SORTED_POST:
            return{
                ...state,
                sortedPost:action.payload
            }
            default :
            return state
    }
}