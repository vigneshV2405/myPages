import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useGetuserbyIdQuery } from '../services/media';
import { Provider } from 'react-redux';
import { store } from '../shared/store';
import axios from 'axios';

function Myfeed() {
    var { id } = useParams();
    var [ user , setUser ] = useState(null);
    var [ posts , setPosts ] = useState(null)
    //var { isLoading , data } = useGetuserbyIdQuery(id);
    useEffect(()=>{
        axios.get(`http://localhost:4000/users/${id}`).then((resp)=>{
            console.log(resp)
            setUser({...resp.data})
        })
    },[])
    useEffect(()=>{
        axios.get(`http://localhost:4000/posts`).then((resp)=>{
            console.log(resp)
            setPosts([...resp.data])
        })
    },[user])
    
    
  return (
    <div className='p-2'>
        
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>
                {
                    !user &&
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    user &&
                    <img src={user.image} className='rounded' style={{width:'40px'}} />
                }
            </button>
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    {
                        !posts &&
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                    {
                        posts &&
                        <div>
                            {
                                posts.map((post)=>{
                                    return (
                                        <div>
                                            <b>{post.id}. {post.title}</b><br/>
                                            <p>{post.body}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
            </div>
        </div>
    </div>
  )
}

export default Myfeed