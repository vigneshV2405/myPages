import React from 'react'
import { useGetcommentsbyIdQuery } from '../services/media'

function Comments(props) {
    const { id } = props
    var { isLoading , data } = useGetcommentsbyIdQuery(id);
    if(!isLoading){
        console.log(data)
    }
  return (
    <div className='p-3 pt-0'>
        <div className=''>
            <button className='btn mt-0'>
                <span className='bi bi-hand-thumbs-up'></span>&nbsp;
                <span>Like</span>
            </button>
            <button className="btn mt-0" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${id}`} aria-expanded="false" aria-controls="collapseExample">
                Comment
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
    </div>
  )
}

export default Comments