

//creating the button component 
export default function Button({clickHandler}){  // declaring clickHandler prop - or also props.clickHandler

    
    return(
            
            //referencing the prop
            <button className="theme-button" onClick={clickHandler}>Theme</button> 
           

    )

}


