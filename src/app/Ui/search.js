'use client';



export default function Search({ searchTerm, setSearchTerm }) {

    const handleOnChange = (event) => {
        console.log("RUnning handle on change")
        setSearchTerm(event.target.value);


    }

    const handleOnClick = (event) =>
    {
        console.log("clicking")
    }


    return (
      <div className="searchBar">
        <label> Search bar </label>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm} 
          onChange={handleOnChange} 
        />

        <p className ="p">
            {searchTerm}
        </p>

        <button onClick={handleOnClick}>
            Button 
        </button>


      </div>
    );
  }


