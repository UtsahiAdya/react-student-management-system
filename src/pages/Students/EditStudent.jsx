import { useState } from "react";
import { CounterContext } from "../../context/CounterContext";

import {

  useNavigate,
  useParams

} from "react-router-dom";


function EditStudent(props) {

  // ✅ Hook at top level
  const param = useParams();

  // ✅ Hook at top level
  const navigate = useNavigate();


  // ✅ Get clicked student using URL id
  const stud =
    props.students[param.id];
  const { count, increment, decrement } = useContext(CounterContext);


  // ✅ Hook must ALWAYS run
  // ❌ Earlier mistake:
  // useState(editedStudent)
  // editedStudent did not exist yet

  // ✅ Correct:
  // initialize using stud

  const [editedStudent, setEditedStudent] =
    useState(

      stud || {

        Name: "",
        Age: "",
        City: ""

      }

    );


  // ✅ Defensive rendering
  // ❌ Earlier mistake:
  // hooks were below this condition

  // That changed hook order

  // ✅ Hooks are now ABOVE condition

  if (!stud) {

    return (

      <h2>

        Student Not Found

      </h2>

    )

  }


  function saveStudent() {

    // ❌ Earlier mistake:
    // [...students]

    // students variable did not exist

    // ✅ Correct:
    // use props.students

    const updateStudents =
      [...props.students];


    // ❌ Earlier mistake:
    // updateStudents[param]

    // param is object:
    // {id:"0"}

    // ✅ Correct:
    // use param.id

    updateStudents[param.id] =
      editedStudent;


    // ❌ Earlier mistake:
    // setStudents(updateStudents)

    // setStudents not defined

    // ✅ Correct:
    // props.setStudents()

    props.setStudents(updateStudents);


    // ✅ Navigate after save
    navigate("../all");

  }


  return (

    <div>
      <button onClick={decrement}>Decrement</button>
      <p>{count}</p>
      <button onClick={increment} >Increment</button>

      <h2>Edit Student</h2>


      <input

        value={editedStudent.Name}

        placeholder="Enter name"

        onChange={(e) => {

          // ❌ Earlier mistake:
          // props.setEditedStudent()

          // did not exist

          // ❌ Earlier mistake:
          // ...stud

          // old object

          // ✅ Correct:
          // use local state

          setEditedStudent({

            ...editedStudent,

            Name: e.target.value

          })

        }}

      />


      <input

        value={editedStudent.Age}

        placeholder="Enter age"

        onChange={(e) => {

          setEditedStudent({

            ...editedStudent,

            Age: e.target.value

          })

        }}

      />


      <input

        value={editedStudent.City}

        placeholder="Enter city"

        onChange={(e) => {

          setEditedStudent({

            ...editedStudent,

            City: e.target.value

          })

        }}

      />


      <button onClick={saveStudent}>

        Save Changes

      </button>

    </div>

  )

}

export default EditStudent;