import React from 'react'

function Courses() {
    var [courses,setC] = React.useState([
        'ReactJS',
        'Angular',
        'Python',
        'MongoDB'
    ])
  return (
    <div className="box">
        <h1>Our courses</h1>
        {
            courses.map((course,i)=>{
                return <li key={i}>{course}</li>
            })
        }
    </div>
  )
}

export default Courses;