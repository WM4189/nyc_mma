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
          return dojo1.average_rating - dojo2.average_rating
      })


  const reviews = gyms.map(gym => gym.user_gyms.map(rev => rev.review) )

    return(
        <>
        <h1>NYC Based Gyms</h1>
        
        <GymFilter filter={filter} setFilter={setFilter} />

        {filteredList.map(g => (
            <GymContainer
                key={uid(g)}
                name={g.name}
                address={g.address}
                hours={g.hours}
                average_rating={g.average_rating}
                link={g.link}
                art={g.art}
                review={reviews}
            />
        ))}
        </>
        )
}

export default Train