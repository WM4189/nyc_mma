import React, { useState, useEffect } from 'react'
import GymContainer from './GymContainer'
import GymFilter from './GymFilter'
import {uid} from 'react-uid';

function Train (){
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
                id={g.id}
                key={uid(g)}
                name={g.name}
                address={g.address}
                average_rating={g.average_rating}
                link={g.link}
                art={g.art}
                join={g.user_gyms}
            />
        ))}
        </>
        )
}

export default Train