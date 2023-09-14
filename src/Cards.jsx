import React from 'react';
import { connect } from 'react-redux';
import store from './store/store';

function Cards(props) {
    console.log(props)
    var [ fn , setFn ] = React.useState('')
    var [ ln , setLn ] = React.useState('')
    var [ em , setEm ] = React.useState('')
    var [ ph , setPh ] = React.useState('')
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Firstname</td>
                    <td><input onChange={(e)=>{setFn(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Lastname</td>
                    <td><input onChange={(e)=>{setLn(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>email</td>
                    <td><input onChange={(e)=>{setEm(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>mobile</td>
                    <td><input onChange={(e)=>{setPh(e.target.value)}}/></td>
                </tr>
            </tbody>
        </table>
        <button onClick={()=>{props.dispatch({type:'ADDstudent',payload:{fname:fn,lname:ln,email:em,phn:ph}})}}>add</button>

        <div className="border border-2 border-dark bg-warning d-flex flex-wrap" style={{width:"fit-content"}}>
            {
                props.students.map((student,i)=>{
                    return (
                        <div className='m-3 p-3 border border-2 border-danger bg-light'>
                            <b>Firstname :</b><span>{student.fname}</span><br/>
                            <b>Lastname :</b><span>{student.lname}</span><br/>
                            <b>Email :</b><span>{student.email}</span><br/>
                            <b>Mobile number :</b><span>{student.phn}</span>
                        </div>

                    )
                })
            }
        </div>
    </div>
  )
}


export default connect(function(state){return state.cr})(Cards);