import {

  createContext,
  useState

} from "react";


// ✅ Export OUTSIDE component
export const ThemeContext =
  createContext();


export function ThemeProvider({children}){

  const [theme, setTheme] =
    useState("light");


  function toggleTheme(){

    if(theme === "light"){

      setTheme("dark");

    }

    else{

      setTheme("light");

    }

  }


  return(

    <ThemeContext.Provider

      value={{

        theme,
        toggleTheme

      }}

    >

      {/* ✅ Render wrapped app */}
      {children}

    </ThemeContext.Provider>

  )

}