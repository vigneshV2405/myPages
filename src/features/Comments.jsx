import React from 'react'
import { useGetcommentsbyIdQuery } from '../services/media'

function Comments(props) {
    const { id } = props
    var { isLoading , data } = useGetcommentsbyIdQuery(id);
    if(!isLoading){
        console.log(data)
    }
  return (
    <div>
        {
            !isLoading &&
            <div>
                {
                    data.map((comment)=>{
                        return (
                            <div className='border p-2 bg-secondary text-white rounded'>
                                <b>{comment.name}</b><br/>
                                <span>{comment.body}</span>
                            </div>
                        )
                    })
                }
            </div>
        }
        {
            isLoading &&
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        }
    </div>
  )
}

export default Comments