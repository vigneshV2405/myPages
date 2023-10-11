import React from 'react';
import Comments from './Comments';

function Post(props) {
    const { post } = props
  return (
    <div className='shadow-lg rounded w-75 mb-3'>
        <div className='p-3 pb-0'>
            <i className='bi bi-card-heading'></i>&nbsp;&nbsp;&nbsp;
            <b>{post.title}</b><br/>
            <p>{post.body}</p>
            <hr/>
        </div>
        <Comments id={post.id}></Comments>
    </div>
  )
}

export default Post