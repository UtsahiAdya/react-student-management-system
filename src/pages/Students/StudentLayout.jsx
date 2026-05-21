import { Link,Outlet } from "react-router-dom";
import { use, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function StudentLayout(){
    const {theme, toggleTheme}=useContext(ThemeContext);

    return(
        <div
          style={{backgroundColor:theme==="light"?"white":"grey",
            color:theme==="light"?"grey":"white"
        }}
        >
            <nav>
                 <Link to="all">

          All Students

        </Link>


        <Link to="add">

          Add Student

        </Link>
            </nav>

                        <button onClick={toggleTheme} > Toggle Theme</button>

            <Outlet/>
        </div>
    )
}


export default StudentLayout;