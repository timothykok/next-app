'use client';

import React, {useState} from "react";
import Search from './search.js';

export default function SearchParent() {
    const [searchTerm, setSearchTerm] = useState('Initial Value');

    return (
        <div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
    );
}

