import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

function StudentForm(){
    let mySchema = Yup.object({
        firstname:Yup.string().required("this field is must"),
        age:Yup.number().required("please enter age")
    })
    return (
        <Formik
            initialValues={{firstname:'',age:''}}
            onSubmit={(values)=>{console.log(values)}}
            validationSchema={mySchema}
        >
            {
                (fobj)=>{
                    console.log(fobj.touched)
                    return (
                        <form onSubmit={fobj.handleSubmit}>
                            <input type="text" name="firstname" onBlur={fobj.handleBlur}></input>
                            <b>{fobj.errors && fobj.errors.firstname}</b>
                            <br></br>
                            <input type="text" name="age" onBlur={fobj.handleBlur}></input>
                            <b>{fobj.errors.age?fobj.errors.age:null}</b>
                            <br></br>
                            <button type="submit">submit</button>
                        </form>
                    )
                }
            }
        </Formik>
    )
}

export default StudentForm