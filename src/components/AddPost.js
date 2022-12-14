import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { createpost } from '../Actions/Post/action'
import { useNavigate } from "react-router-dom";
const AddPost = (props) => {

    const history = useNavigate();
    const initpost = {
        id:null,
        title:'test',
        body:'test'
    }
    const dispatch = useDispatch();;
    const [post, setpost] = useState(initpost);
    const handlechangeevent = (event) => {
        const { name,value } = event.target;
        setpost({...post,[name]:value });
       
    }

    const submitdata = (e) => {
        e.preventDefault();
        const data = {
            userId: '1',
            id : uuidv4(),
            title : post.title,
            body : post.body
        }

        dispatch(createpost(data));
        history.push("/posts");
    }
    return (
        <div className="container" style={{marginTop:'30px'}}>
        <form onSubmit={submitdata}>
            <div className="form-group">
                <label >Title</label>
                <input type="text" name="title"  onChange={handlechangeevent} className="form-control" placeholder="Title" />
            </div>
            <div className="form-group" style={{marginTop:'15px'}}>
                <label >Body</label>
                <textarea className="form-control"  name="body" onChange={handlechangeevent} placeholder="body"></textarea>
            </div>
           
            <button style={{marginTop:'15px'}} type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
       
    )
}

export default AddPost;