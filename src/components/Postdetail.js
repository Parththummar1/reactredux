import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { selectedpost } from './../Actions/Post/action';

const Postdetail = (props) => {
    const post = useSelector(state => state.postdata.selectedpost)
    const params = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectedpost(params.id));
    }, [dispatch,params.id])
    return (
        <div className="media-body" style={{marginTop:'30px'}}>
        
    <p className="text-right">{ post.id }</p>
            <p>{ post.body }</p>
     
   </div>
    );
}

export default Postdetail;