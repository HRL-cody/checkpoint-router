import React from 'react'
import './Search.css'



export default function Search({setSearch}) {
    const handleChange = (e) => { 
    setSearch(e.target.value);
};
    return (

    <div>
            <form action="input" className="search-bar">
	    <input type="search" name="search" pattern=".*\S.*" required onChange={handleChange}/>
	    <button className="search-btn" type="submit">
		    <span>Search</span>
	        </button>
            
        </form>
    </div>
    )
}