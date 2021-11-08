import React, { useState, useEffect } from 'react'
import GymContainer from './GymContainer'
import GymFilter from './GymFilter'
import {uid} from 'react-uid';

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
        <h1>NYC Based Gyms</h1>
        
        <GymFilter filter={filter} setFilter={setFilter} />

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
            />
        ))}
        </>
        )
}

export default Train