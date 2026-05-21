// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import Students from "./pages/Students/Students";
// import AddStudents from "./pages/Students/AddStudents";
// import NotFound from "./pages/Students/NotFound";
// import StudentDetails from "./pages/Students/StudentDetails";
// import EditStudent from "./pages/Students/EditStudent";
// import StudentLayout from "./pages/Students/StudentLayout";
// import Home from "./Home";
// import "./Navbar.css";
// import { use, useEffect, useState } from "react";



// function App() {
//   const [students, setStudents] = useState([]);
//   const [student, setStudent] = useState({
//     Name: "",
//     Age: "",
//     City: ""
//   });
//   useEffect(() => {

//     const savedStudent =
//       localStorage.getItem("students");

//     if (savedStudent) {

//       setStudents(
//         JSON.parse(savedStudent)
//       )

//     }

//   }, [])



//   useEffect(() => {

//     // prevent initial empty overwrite
//     if (students.length > 0) {

//       localStorage.setItem(

//         "students",

//         JSON.stringify(students)

//       )

//     }

//   }, [students])

//   function deleteStudent(index) {
//     const newStudents = [...students];
//     newStudents.splice(index, 1)
//     setStudents(newStudents);

//   }

//   function addStudent(student) {
//     const newStudents = [...students,
//       student
//     ]
//     setStudents(newStudents);
//   }

//   return (

//     <BrowserRouter>

//       <nav>

//         <Link to="/students/all">
//           Students
//         </Link>

//         <Link to="/students/add">
//           AddStudents
//         </Link>
//         <Link to="/">Home</Link>
//       </nav>


//       <Route

//   path="/students"

//   element={<StudentLayout />}

// >

//   <Route

//     index

//     element={

//       <Students
//         student={student}
//         students={students}
//         deleteStudent={deleteStudent}
//       />

//     }

//   />

//   <Route
//     path="all"
//     element={<Students ... />}
//   />

//   <Route
//     path="add"
//     element={<AddStudents ... />}
//   />

// </Route>



//     </BrowserRouter>

//   )

// }

// export default App;
































import {

  BrowserRouter,
  Routes,
  Route,
  Link

} from "react-router-dom";

import {

  useEffect,
  useState,
  useContext

} from "react";
import { ThemeContext } from "./context/ThemeContext";

import "./Navbar.css";


// Pages
import Home from "./Home";

import Students from "./pages/Students/Students";

import AddStudents from "./pages/Students/AddStudents";

import StudentDetails from "./pages/Students/StudentDetails";

import EditStudent from "./pages/Students/EditStudent";

import StudentLayout from "./pages/Students/StudentLayout";

import NotFound from "./pages/Students/NotFound";


function App() {
    const{theme, toggleTheme}=useContext(ThemeContext)

  // Student list state
  const [students, setStudents] =
    useState([]);


  // Add form state
  const [student, setStudent] =
    useState({

      Name: "",
      Age: "",
      City: ""

    });


  // Load from localStorage on first render
  useEffect(() => {

    const savedStudents =
      localStorage.getItem("students");


    if(savedStudents){

      setStudents(

        JSON.parse(savedStudents)

      )

    }

  }, []);


  // Save whenever students change
  useEffect(() => {

    localStorage.setItem(

      "students",

      JSON.stringify(students)

    )

  }, [students]);


  // Add student
  function addStudent(student){

    const newStudents = [

      ...students,

      student

    ];


    setStudents(newStudents);

  }


  // Delete student
  function deleteStudent(index){

    const newStudents =
      [...students];


    newStudents.splice(index, 1);


    setStudents(newStudents);

  }


  return (
    <div
     style={{backgroundColor:theme==="light"?"white":"grey",
            color:theme==="light"?"grey":"white"
        }}
    >

    <BrowserRouter>

      {/* Top Navbar */}
      <nav   style={{backgroundColor:theme==="light"?"white":"grey",
            color:theme==="light"?"grey":"white"
        }}>

        <Link to="/">
          Home
        </Link>


        <Link to="/students">
          Students
        </Link>


        <Link to="/students/add">
          Add Student
        </Link>
                  <button onClick={toggleTheme} > Toggle Theme</button>

      </nav>


      <Routes>

        {/* Home */}
        <Route

          path="/"

          element={<Home />}

        />


        {/* Nested Student Routes */}
        <Route

          path="/students"

          element={<StudentLayout />}

        >

          {/* Default nested route */}
          <Route

            index

            element={

              <Students

                students={students}

                deleteStudent={deleteStudent}

              />

            }

          />


          {/* All Students */}
          <Route

            path="all"

            element={

              <Students

                students={students}

                deleteStudent={deleteStudent}

              />

            }

          />


          {/* Add Student */}
          <Route

            path="add"

            element={

              <AddStudents

                student={student}

                setStudent={setStudent}

                addStudent={addStudent}

              />

            }

          />


          {/* Student Details */}
          <Route

            path="details/:id"

            element={

              <StudentDetails

                students={students}

              />

            }

          />


          {/* Edit Student */}
          <Route

            path="edit/:id"

            element={

              <EditStudent

                students={students}

                setStudents={setStudents}

              />

            }

          />

        </Route>


        {/* 404 */}
        <Route

          path="*"

          element={<NotFound />}

        />

      </Routes>

    </BrowserRouter>
    </div>

  )

}

export default App;