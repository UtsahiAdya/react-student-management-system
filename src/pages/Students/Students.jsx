import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import {AuthContext} from "../../context/AuthContext";
import { useEffect } from "react";
import { useContext } from "react";
function Students(props){
    const {theme, toggleTheme}=useContext(ThemeContext); 
    const{user, login, logout}=useContext(AuthContext);

  return(
  
    <>
      if(user===""){
        <button onClick={()=>{
          login
        }} >Login</button>
      }
      else{
    

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
            <button onClick={logout} >Logout</button>

            </div>

          )

        })

      }

    </>

  )

}

export default Students;