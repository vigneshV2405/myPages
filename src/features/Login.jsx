import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAddnewUserMutation, useGetallusersQuery, useLazyGetallusersQuery } from '../services/media';
import { useNavigate } from 'react-router-dom';
import { auth } from '../shared/firebase';
import { changeUser } from './loginSlice';
import { useDispatch } from 'react-redux';
const provider = new GoogleAuthProvider();

function Login() {
    const dispatch = useDispatch();
    var [ adduser ] = useAddnewUserMutation();
    var { data } = useGetallusersQuery();
    var [ refresh ] = useLazyGetallusersQuery();
    const navigate = useNavigate();

    function login(){
        signInWithPopup(auth,provider)
        .then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log("auth::",auth)
            console.log("provider::",provider)
            console.log(result)
            const user = result.user;
            var userDup = data.filter((x)=>{
                return (x.mailId===user.email)
            })
            dispatch(changeUser({name:user.displayName,email:user.email}))
            console.log(userDup)
            if(userDup.length>0){
                alert('this email is already in use click ok to continue with this mail')
                navigate(`/myfeed/${userDup[0].id}`)
            }
            if(userDup.length==0){
                var newUser = {Uname:user.displayName,mailId:user.email,image:user.photoURL}
                adduser(newUser).then((res)=>{
                    refresh();
                    console.log(res);
                    navigate(`/myfeed/${res.data.id}`);
                })
            }
            
        }).catch((error)=>{
            console.log(error)
        });
    }

  return (
    <div className='App'>
        <table align='center' className=''>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Username</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type="password" />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button className='btn btn-primary'>Login</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button className='btn btn-primary' onClick={()=>{login()}}>Login with Gmail</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Login