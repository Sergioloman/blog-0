import React,  {useEffect, useState} from 'react';

import Axios from 'axios';

const PostList = () => {
 
    const [ allPosts, setPosts] = useState(['']) 

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/posts/")
        .then((response) => {
            setPosts(response.data)
            })
        .catch(err => console.log("error"))
    },[])


        return (
            <ul>
                {allPosts.map(post => {
                    return (
                        <li>
                            <h5 className='text-light'>{post.postText}</h5>
                            <div className='text-light'>by <span className='h6'>{post.username}</span> on <span className='h6'>{post.createdAt}</span></div>
                            <br/>
                        </li>
                    )
                })}               
            </ul>
        )
}

export default PostList
