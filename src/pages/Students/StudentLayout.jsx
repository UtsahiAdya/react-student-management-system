import { Link, Outlet } from "react-router-dom";
import { use, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CounterContext } from "../../context/CounterContext";

function StudentLayout() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { count, increment, decrement } = useContext(CounterContext);


    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "white" : "grey",
                color: theme === "light" ? "grey" : "white"
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



            <Outlet />
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
            <button onClick={increment} >Increment</button>
            <div>   Student</div>
        </div>
    )
}


export default StudentLayout;