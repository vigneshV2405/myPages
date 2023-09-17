import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

function Books2() {
    let mySchema = Yup.object({
        title:Yup.string().required('this field is required'),
        author:Yup.string('sdfgh').required('author is mandatory')
    })
  return (
    <Formik
        initialValues={{title:'',author:''}}
        onSubmit={(values)=>{console.log(values)}}
        validationSchema={mySchema}
    >
        {
            (fobj)=>{
                console.log("fobj::",fobj)
                return (
                    <form onSubmit={fobj.handleSubmit}>
                        title: <input name="title" placeholder='enter title' onChange={fobj.handleChange} /><br/>
                        author: <input name="author" placeholder='enter author' onChange={fobj.handleChange} /><br/>
                        <button type="submit">submit</button>
                    </form>
                )
            }
        }
    </Formik>
  )
}

export default Books2