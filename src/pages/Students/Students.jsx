import { Link } from "react-router-dom";
import { useEffect } from "react";
function Students(props){
   

  return(

    <>

      {

        props.students.map((student, index)=>{

          return(

            <div key={index}>

              <Link to={`/students/details/${index}`}>View Details</Link>
              <p>{student.Name}</p>

              <p>{student.Age}</p>

              <p>{student.City}</p>
                <Link to={`/students/edit/${index}`}>Edit</Link>


              <button onClick={() => {

                props.deleteStudent(index);

              }}>

                Delete

              </button>

            <button onClick={toggleTheme} > Toggle Theme</button>

            </div>

          )

        })

      }

    </>

  )

}

export default Students;