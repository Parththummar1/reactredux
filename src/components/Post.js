import  React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import './Post.css';
import { getallpost } from './../Actions/Post/action';
import { Link, Route,Routes } from 'react-router-dom';
import Postdetail from './Postdetail'

const Post = () => {
    const posts = useSelector((state) => state.postdata.posts);
    
    const dispatch = useDispatch();
    useEffect(() => {
      
        dispatch(getallpost());
        
    }, [dispatch])

    const deletepost = (id) => {
        dispatch(deletepost(id));
    }
    return (
        <div className="container">
            <table id="customers">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => {
                            return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>
                                <Link to={`/posts/view/${post.id}`} type="button" className="btn btn-primary">View </Link> | <button type="button" className="btn btn-primary">Edit </button> | <button type="button" onClick={() => deletepost(post.id)} className="btn btn-danger">Delete</button>
                                </td>
                                
                            </tr>);     
                        })
                    }
                    
                   
                </tbody>
               
                
                </table>
        </div>
    )
}

export default Post;