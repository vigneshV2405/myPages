import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useGetallpostsQuery, useGetuserbyIdQuery } from '../services/media';
import { getAuth, signOut } from 'firebase/auth';


function Myfeed() {
    var { id } = useParams();
    //var [ user , setUser ] = useState(null);
    var { isLoading:is2 , data:posts } = useGetallpostsQuery();
    var { isLoading , data:user } = useGetuserbyIdQuery(id);
    const auth = getAuth();
    const navigate = useNavigate();
    function out(){
        signOut(auth).then(()=>{
            console.log('signout success')
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <div className='p-2'>
        
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>
                    {
                        isLoading &&
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                    {
                        !isLoading &&
                        <img src={user.image} className='rounded' style={{width:'40px'}} />
                    }
                </button>
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Feed</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                <button type="button" class="btn btn-secondary" onClick={()=>{out()}}>
                    Sign out
                </button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    {
                        is2 &&
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                    {
                        !is2 &&
                        <div>
                            {
                                posts.map((post)=>{
                                    return (
                                        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                                            <b>{post.title.toUpperCase()}</b><br/>
                                            <p>{post.body}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                    {
                        user &&
                        <>
                            <h1>{user.Uname}</h1>
                            <i>{user.mailId}</i>
                        </>
                    }
                </div>
                <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
            </div>
        </div>
    </div>
  )
}

export default Myfeed