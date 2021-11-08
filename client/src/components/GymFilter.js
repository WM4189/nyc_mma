import { Redirect, useHistory, NavLink, Route } from 'react-router-dom'

const linkStyles = {
    width: "85px",
    padding: "2px",
    color: "black",
    // backgroundColor:"gray",
    transition: "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out" 

  };

function GymFilter({filter, setFilter}){
    return(
        <>

        <div>

        <label htmlFor="search">Filter Gyms: </label>
        
        <input
            className="searchbar"
            type="text"
            id="search"
            placeholder="Type to filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      </>
    )
   
}

export default GymFilter;