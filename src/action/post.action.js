import { ADD_POST, GET_ALL_POST, APIURL ,UPDATE_POST, DELETE_POST, GET_SORTED_POST} from "./type";
import axios from "axios";

export const funAddPost = (message) => (dispatch) => {
    const method = "/insert-post";
    const options = {
        headers:{
            "auth" : localStorage.getItem('token')
        }
    }

    axios.post(APIURL + method, message,options)
    .then((res)=>{
        if(res.data.status === "OK"){
            dispatch({
                type: ADD_POST,
                payload:res.data.message
            });
        }
    })
    .catch((err)=>{
        console.log(err)
    });
}

export const funGetAllPosts = () => (dispatch) => {
    const method = "/select-post";
    const options = {
        headers:{
            "auth" : localStorage.getItem('token')
        }
    }
    axios.get(APIURL + method,options)
    .then((res)=>{
        if(res.data.status === "OK"){
            dispatch({
                type: GET_ALL_POST,
                payload: res.data.message.reverse()
            });
        }
    })
    .catch((err)=>{
        console.log(err);
    });
};

export const funUpdatePost = (message) => (dispatch) => {
    const method = "/edit-post";
    const options = {
        headers:{
            "auth" : localStorage.getItem('token')
        }
    }
    axios.post(APIURL + method,message,options)
    .then((res)=>{
        if(res.data.status === "OK"){
            dispatch({
                type:UPDATE_POST,
                payload: res.data.message
            });
        }
    })
    .catch((err)=>{
        console.log(err);
    });
};

export const funDeletePost = (message) => (dispatch) =>{
    const method = "/remove-post";
    const options = {
        headers:{
            "auth" : localStorage.getItem('token')
        }
    }
    axios.post(APIURL + method,message,options)
    .then((res)=>{
        if(res.data.status === "OK"){
            dispatch({
                type:DELETE_POST,
                payload:res.data.message
            })
        }
    })
    .catch((err)=>{
        console.log(err);
    });
};

export const funGetSortedPosts = (data) => (dispatch) =>{
    const method = "/sort-post";
    const options = {
        headers:{
            "auth" : localStorage.getItem('token')
        }
    }
    const query = data;
    axios.post(APIURL + method,{query:query},options)
    .then((res)=>{
        if(res.data.status === "OK"){
            dispatch({
                type:GET_SORTED_POST,
                payload:res.data.message.reverse()
            })
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}