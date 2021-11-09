import { Redirect, useHistory, NavLink, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import GymContainer from './GymContainer'
import GymFilter from './GymFilter'
import {uid} from 'react-uid';

const linkStyles = {
    width: "85px",
    padding: "2px",
    color: "black",
    // backgroundColor:"transparent",
    transition: "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out" 

  };

function Train (props){
    const user_id = props
    const [filter, setFilter] = useState("")
    const [gyms, setGyms] = useState([]);
    

    useEffect(() => {
    fetch("/gyms")
    .then(res => res.json())
    .then(gyms => setGyms(gyms))
    },[setGyms])


    const filteredList = 
    gyms.filter(dojo => dojo.name.toLowerCase().includes(filter.toLowerCase()) || dojo.art.toLowerCase().includes(filter.toLowerCase()))
    .sort((dojo1, dojo2) => {
        return dojo2.average_rating - dojo1.average_rating
    })

    return(
        <>
        <h1>Explore Library or {<NavLink style={linkStyles}  to= '/new_gym'>Add New Gym</NavLink> }</h1>
        {/* <h1>{<NavLink style={linkStyles}  to= '/new_gym'>Add New Gym</NavLink> }</h1> */}
        

        
        <GymFilter filter={filter} setFilter={setFilter}  />
        {/* {<NavLink style={linkStyles}  to= '/new_gym'>Add New Gym</NavLink> } */}

        {filteredList.map(g => (
            <GymContainer
                gym_id={g.id}
                key={uid(g)}
                name={g.name}
                address={g.address}
                average_rating={g.average_rating}
                link={g.link}
                art={g.art}
                join={g.user_gyms}
                user_id={user_id}
                total_reviews={g.user_gyms.length}
            />
        ))}
        </>
        )
}

export default Train