'use client'

import "../globals.css";
import React, {useState} from "react";
import Button from "../ui/Button";
import { useTheme } from "../hooks/useTheme";

export default function About() {

    const {theme, setTheme, changeTheme} = useTheme();

  return (
    
    <div className={`home-container ${theme === "dark" && "home-container-dark"}`}>
    <h1 className={`home-header ${theme === "dark" && "home-header-dark"}`}>
      About
    </h1>

     <Button clickHandler={changeTheme} />
    

  </div>

  );
}
