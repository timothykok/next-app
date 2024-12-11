'use client';

export default function SearchChild({ searchTerm, setSearchTerm, test}) {

  console.log('Props:', { searchTerm, setSearchTerm, test }); // Add this line

  const handleOnChange = (event) => {
    console.log("Running handle on change")
    setSearchTerm(event.target.value);
  }

  const handleOnClick = () => {
    console.log("clicking")
    setSearchTerm(() => 'Ive been hit');
  }

  return (
    <div className="searchBar">
      <label> Search bar </label>
      <input
        type="text"
        value={searchTerm} 
        onChange={handleOnChange} 
      />
      <p className="p">
        {searchTerm}
      </p>
      <button onClick={handleOnClick}>
        Button 
      </button>
    </div>
  );
}
