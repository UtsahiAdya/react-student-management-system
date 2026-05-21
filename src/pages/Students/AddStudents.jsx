import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function AddStudents(props) {
    const navigate = useNavigate();
    const {theme, toggleTheme}=useContext(ThemeContext)

    return (

        <div 
          style={{backgroundColor:theme==="light"?"white":"grey",
            color:theme==="light"?"grey":"white"
        }}
        >

            <input

                value={props.student.Name}

                placeholder="Enter name"

                onChange={(e) => {

                    props.setStudent({

                        ...props.student,

                        Name: e.target.value

                    })

                }}

            />


            <input

                value={props.student.Age}

                placeholder="Enter age"

                onChange={(e) => {

                    props.setStudent({

                        ...props.student,

                        Age: e.target.value

                    })

                }}

            />


            <input

                value={props.student.City}

                placeholder="Enter city"

                onChange={(e) => {

                    props.setStudent({

                        ...props.student,

                        City: e.target.value

                    })

                }}

            />


            <button onClick={() => {

                props.addStudent(props.student);
                navigate("../all");
                props.setStudent({

                    Name: "",
                    Age: "",
                    City: ""

                })

            }}>

                Add Student

            </button>

                        <button onClick={toggleTheme} > Toggle Theme</button>


        </div>

    )

}

export default AddStudents;