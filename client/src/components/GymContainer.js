import ReviewForm from './ReviewForm'
import {useState} from 'react'
import {uid} from 'react-uid';
import { Redirect, useHistory, NavLink, Route } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const linkStyles = {
    width: "85px",
    padding: "2px",
    color: "black",
    borderRadius: "5px",
    // backgroundColor:"gray",
    transition: "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out" 

  };

function GymContainer(props){
    const history = useHistory();
    const {name, address, total_reviews, average_rating, link, art, join, gym_id, user_id} = props
    const [toggle, setToggle] = useState(false)

    // console.log(user_id.user_id.id)
    // console.log(gym_id)
   const gymName = {
    textDecoration: "underline"
    }


    // function redirect(name, user_id, gym_id){
    //     // <Redirect
    //     // to={{
    //     //     pathname: "/reviews",
    //     //     state: { gym_id: gym_id }
    //     //   }}
    //     // />
    // }

    

const review = join.map(rev => <p key={uid(rev)}><li><em>{rev.review}</em></li></p>)
// const stars = average_rating ? average_rating.toFixed(2) : .1
const stars = average_rating 
const map = `https://maps.google.com/?q=${name}+${address}`

    return(
    <div id="contain">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <article key={uid(name)} id="card" className="card">
                <h3 style={gymName}>{name}</h3>
                {/* {average_rating.toFixed(2) * 20}% */}
                {/* {average_rating} */}
                <strong className="art">{art} Focused</strong>
                <br />
                
                {/* {stars} <Rating defaultValue={stars} precision={0.0625} readOnly /> {total_reviews} Reviews */}
                <div id='stars'>
                {stars ? stars.toFixed(2) : "0"}/5 <Rating defaultValue={stars} precision={0.25} readOnly /> {total_reviews} {total_reviews === 1 ? "Review" : "Reviews"}
                </div>

                {/* <Rating defaultValue={stars} precision={0.0625} readOnly />  */}


                <p>{address}</p>
                <br />

                
                {/* <strong>Flip card for {total_reviews === 1 ? "Review" : "Reviews"} </strong> ➜ */}
                <strong>Flip to Comment </strong> ➜

            </article>                </div>

                <div style={{color: "black"}} className="flip-card-back">
                {/* <strong><a className='gym' href={link}>Website Link</a></strong> */}
                <strong><a className='gym' href={map}>View Map</a></strong>

                <br />
                <strong ><p>Reviews:</p></strong>
                            {review}
                            
                            {/* <ReviewForm gym_name={name} user_id={user_id} gym_id={gym_id} /> */}
                {/* <button style={linkStyles} onClick={(name, user_id, gym_id) => history.push('/reviews')}>Add Review </button> */}
                {/* <Redirect to={{ pathname: "/reviews", state: { gym_id: gym_id }, { user_id: user_id}}}/>Add Review  */}
                <NavLink style={linkStyles} to={{ 
                    pathname: '/reviews',
                    state: { gymId: {gym_id}, userId: {user_id}},
                }}
                >Add Review</NavLink>              
                </div>
            </div>
        </div>
    </div>
   
    )
}

export default GymContainer