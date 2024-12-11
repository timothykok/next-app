'use client';

import React, { useState } from 'react';
import Search from './search';

export default function Parent() {
  const [searchTerm, setSearchTerm] = useState(''); 

  return (
    <div>
      <h1>Parent Component</h1>
    
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}