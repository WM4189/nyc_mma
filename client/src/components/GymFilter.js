
function GymFilter({filter, setFilter}){
  return(
      <>
      <div>
        <label htmlFor="search">Filter Gyms: </label>
        <input
            className="searchbar"
            type="text"
            id="search"
            placeholder="Gym Name or Focus"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        />
    </div>
    </>
  )
}

export default GymFilter;