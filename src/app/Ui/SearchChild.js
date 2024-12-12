'use client';
import React, {useState} from 'react'
import SearchGrandChild from './SearchGrandChild';



// props created to be used 
export default function SearchChild() {


  
  //each SearchGrandChild component only uses a particular set of props when called.
  return (
    <div className="searchBar">
        <p> child </p>

      
        <SearchGrandChild/>
        
    </div>
  );
}


//cond rendering 
//useContext vs propDrilling 