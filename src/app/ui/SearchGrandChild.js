'use client'

import React, { useContext } from "react";
import { searchTermContext } from "./SearchParent";

export default function SearchGrandChild() {

    const searchTerm = useContext(searchTermContext);

    return (
      <>
        <div>
          <p> Grandchild </p>
          {searchTerm && <p> Search {searchTerm}  </p>}
          {/* {number && <p> Number {number} </p>} */}
        </div>
      </>
    );
  }