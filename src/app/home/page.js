"use client";

import { useState } from "react";
import "../globals.css";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useCallback } from "react";
import { useTheme } from "../hooks/useTheme";
import ToDoList from "../ui/ToDoList";


//defining the home component
export default function Home() {

//declaring theme variables that this component uses - custom hook 
const {theme, setTheme, changeTheme} = useTheme();


  //conditional className
  return (
    <>
      <div className={`home-container ${theme === "dark" && "home-container-dark"}`}>
        <h1 className={`home-header ${theme === "dark" && "home-header-dark"}`}>
          Home
        </h1>

        {/* consumes/uses the prop(this one is a function prop) ("calling") */} 
        <Button clickHandler={changeTheme} /> 
        <ToDoList/>
        

      </div>

     
    </>
  );
}


