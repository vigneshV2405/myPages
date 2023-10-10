import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAddnewUserMutation, useGetallusersQuery } from '../services/media';
import { useNavigate } from 'react-router-dom';
const provider = new GoogleAuthProvider();

function Login() {
    //var { isLoading , data } = useGetallusersQuery();
    var [ adduser ] = useAddnewUserMutation();
    var { isLoading , data } = useGetallusersQuery();
    const navigate = useNavigate();

    function login(){
        const auth = getAuth();
        signInWithPopup(auth,provider)
        .then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            var userDup = data.filter((x)=>{
                return (x.mailId===user.email)
            })
            if(userDup.length>0){
                alert('this email is already in use click ok to continue with this mail')
            }
            else{
                var newUser = {Uname:user.displayName,mailId:user.email,image:user.photoURL}
                adduser(newUser).then((res)=>{
                    console.log(res)
                    navigate(`/myfeed/${res.data.id}`)
                })
            }
            
        }).catch((error)=>{
            console.log(error)
        });
    }

  return (
    <div>
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