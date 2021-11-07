import React, { useState, useEffect } from 'react'
import GymContainer from './GymContainer'
import {uid} from 'react-uid';

function Train (){

    const [gyms, setGyms] = useState([]);

  useEffect(() => {
    fetch("/gyms")
      .then(res => res.json())
      .then(gyms => setGyms(gyms))
  },[setGyms])


  const reviews = gyms.map(gym => gym.user_gyms.map(rev => rev.review) )

    return(
        <>
        Train
        {/* <article className="card">
        <p> */}
        {gyms.map(g => (
       
            <GymContainer
                key={uid(g)}
                name={g.name}
                address={g.address}
                hours={g.hours}
                average_rating={g.average_rating}
                link={g.link}
                art={g.art}
                // review={g.user_gyms[0].review}
                review={reviews}
            />
        ))}
        {/* </p>
        </article> */}
        </>
        )
}

export default Train