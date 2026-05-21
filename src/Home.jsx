import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Home(){
    const{theme, toggleTheme}=useContext(ThemeContext)
    return(
        <div
        style={{backgroundColor:theme==="light"?"white":"grey",
            color:theme==="light"?"grey":"white"
        }}
        >
            <h1>Home</h1>
        <h2>

        Current Theme:
        {theme}

      </h2>
            <button onClick={toggleTheme} > Toggle Theme</button>
        </div>
    )
}

export default Home;