'use client';

import React, { useState, createContext } from 'react';
import SearchChild from './SearchChild';


//export and create context 
export const searchTermContext = createContext();

export const numberContext = createContext();



export default function SearchParent() {


  //state defined
  const [searchTerm, setSearchTerm] = useState('Initial Search Term'); 

  //another state defined 
  const [number, setNumber] = useState('1'); 

 
 //passing props to the child 
  return (
    <div>
      <h1>Parent Component</h1>

      <searchTermContext.Provider value={{searchTerm, number}}>

        <SearchChild />

      </searchTermContext.Provider>
    
      
      
    </div>
  );
}


