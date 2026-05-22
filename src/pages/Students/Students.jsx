import { Link } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import { AuthContext } from "../../context/AuthContext";

import { CounterContext } from "../../context/CounterContext";


function Students(props) {
  const { count, increment, decrement } = useContext(CounterContext);


  const {

    theme,
    toggleTheme

  } = useContext(ThemeContext);


  const {

    user,
    login,
    logout

  } = useContext(AuthContext);


  return (

    <>

      {

        user === ""

          ?

          <button onClick={login}>

            Login

          </button>

          :

          <>

            <h2>

              Welcome {user}

            </h2>
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
            <button onClick={increment} >Increment</button>

            <button onClick={logout}>

              Logout

            </button>


            <button onClick={toggleTheme}>

              Toggle Theme

            </button>


            {

              props.students.map((student, index) => {

                return (

                  <div key={index}>

                    <Link

                      to={`/students/details/${index}`}

                    >

                      View Details

                    </Link>


                    <p>{student.Name}</p>

                    <p>{student.Age}</p>

                    <p>{student.City}</p>


                    <Link

                      to={`/students/edit/${index}`}

                    >

                      Edit

                    </Link>


                    <button onClick={() => {

                      props.deleteStudent(index)

                    }}>

                      Delete

                    </button>

                  </div>

                )

              })

            }

          </>

      }

    </>

  )

}


export default Students;