'use client';



export default function Search({ searchTerm, setSearchTerm }) {

    // const handleOnChange = (event) => {
    //     console.log("RUnning handle on change")
    //     setSearchTerm("Result")

    
    // }

    return (
      <div className="searchBar">
        <label> Search bar </label>
        {/* <input
          type="text"
          placeholder="Search"
          value={searchTerm} 
          onChange={handleOnChange} 
        /> */}

        <p className ="p">
            {searchTerm}
        </p>

        <button>
            Button 
        </button>


      </div>
    );
  }








// create state in parent component 
// and child component that takes props that displays state data from parent component

