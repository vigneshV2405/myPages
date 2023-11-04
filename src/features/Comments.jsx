import React , { useState } from 'react';
import { useAddcommentMutation, useGetcommentsbyIdQuery, useLazyGetcommentsbyIdQuery } from '../services/media'
import { useDispatch, useSelector } from 'react-redux';

function Comments(props) {
    var { user } = useSelector((state)=>{return state.u})
    const dispatch = useDispatch();
    const { id } = props
    var { isLoading , data } = useGetcommentsbyIdQuery(id);
    const [ refreshComments ] = useLazyGetcommentsbyIdQuery();
    var [ comment , setComment ] = useState(null);
    const [ addnewC ] = useAddcommentMutation();

    function addComment(){
        addnewC({postId:id,name:user.name,email:user.email,body:comment}).then(()=>{
            refreshComments(id)
        })
    }

  return (
    <div className='p-3 pt-0'>
        <div className=''>
            <button className='btn mt-0'>
                <span className='bi bi-hand-thumbs-up'></span>&nbsp;
                <span>Like</span>
            </button>
            <button className="btn mt-0" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExamplecomment${id}`} aria-expanded="false" aria-controls="collapseExample">
                Comment
            </button>
            <button className="btn mt-0" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${id}`} aria-expanded="false" aria-controls="collapseExample">
                Show all Comments
            </button>
        </div>
        <hr/>
        {
            !isLoading &&
            <div className="collapse mt-2" id={`collapseExample${id}`}>
                <div className="">
                    {
                        data.map((comment)=>{
                            return (
                                <div className='bg-secondary-subtle p-3 pb-0 mb-2 rounded-4'>
                                    <b>{comment.name}</b>
                                    <p>{comment.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        }
        <div align="center" className="collapse mt-2" id={`collapseExamplecomment${id}`}>
            <textarea onChange={(e)=>{setComment(e.target.value)}} />&nbsp;
            <button className='rounded' onClick={()=>{addComment()}} >comment</button>
        </div>
    </div>
  )
}

export default Comments