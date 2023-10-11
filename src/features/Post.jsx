import React from 'react';
import Comments from './Comments';

function Post(props) {
    const { post } = props
  return (
    <div className='shadow-lg rounded w-75'>
        <div className='p-3'>
            <i className='bi bi-card-heading'></i>&nbsp;&nbsp;&nbsp;
            <b>{post.title}</b><br/>
            <p>{post.body}</p>
        </div>
        <div className='bg-light bg-gradient p-3'>
            <Comments id={post.id}></Comments>
        </div>
    </div>
  )
}

export default Post