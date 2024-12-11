'use client';

import React, { useState } from 'react';
import SearchChild from './SearchChild';

export default function SearchParent() {
  const [searchTerm, setSearchTerm] = useState('Initial Search Term'); 

  return (
    <div>
      <h1>Parent Component</h1>
    
      <SearchChild test={'Test String'} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}