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
import DashboardLayout from "./pages/Nested/DashboardLayout";
import Profile from "./pages/Nested/Profile";
import Settings from "./pages/Nested/Settings";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

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


    if (savedStudents) {

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
  function addStudent(student) {

    const newStudents = [

      ...students,

      student

    ];


    setStudents(newStudents);

  }


  // Delete student
  function deleteStudent(index) {

    const newStudents =
      [...students];


    newStudents.splice(index, 1);


    setStudents(newStudents);

  }


  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "grey",
        color: theme === "light" ? "grey" : "white"
      }}
    >

      <BrowserRouter>

        {/* Top Navbar */}
        <nav>

          <Link to="/">
            Home
          </Link>

          <Link to="/students">
            Students
          </Link>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={toggleTheme}>
            Toggle Theme
          </button>

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
            <Route path="/dashboard" element={<DashboardLayout />} >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />

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