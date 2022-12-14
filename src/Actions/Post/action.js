import axios from 'axios';
import { FETCH_POST,SELCTED_POST, ADD_POST,DELETE_POST } from './type';


export const getallpost = () => async (dispatch) => {
    const res = await axios.get('http://localhost:3333/posts');
    dispatch({
        type:FETCH_POST,
        payload : res.data
    })
    
}

export const selectedpost = (id) => async(dispatch) => {
    const res = await axios.get('http://localhost:3333/posts/'+id);

    dispatch({
        type: SELCTED_POST,
        payload : res.data
    })

}
export const createpost = (data) => async(dispatch) => {
    const res = await axios.post('http://localhost:3333/posts',data);
    
}

export const deletepost = (id) => async(dispatch) => {
    const res = await axios.delete('http://localhost:3333/posts/'+id);

    dispatch({
        type:DELETE_POST,
        payload : id
    })
}