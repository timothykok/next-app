import React, { createContext, useState } from "react";


const ThemeContext = createContext();




//provides - declaration
export function ThemeProvider({children}){

    //defines state available for whole app
    const [theme, setTheme] = useState("dark")

    //defines logic available to whole app
    function changeTheme(){

        if (theme === "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
        
      }
    

    return(

        //wraps provider value around children component
        <ThemeContext.Provider value={{theme, setTheme, changeTheme}}>
          
             {children}

        </ThemeContext.Provider>
    )

}


//consumes - usage
export function useTheme(){ 
    return React.useContext(ThemeContext)
}

