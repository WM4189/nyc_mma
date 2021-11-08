import ReviewForm from './ReviewForm'
import {uid} from 'react-uid';
import { Redirect, useHistory, NavLink, Route } from 'react-router-dom'
// import Rating from '@mui/material/Rating';

const linkStyles = {
    width: "85px",
    padding: "2px",
    color: "black",
    // backgroundColor:"gray",
    transition: "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out" 

  };

function GymContainer(props){
    const history = useHistory();
    const {name, address, average_rating, link, art, join, gym_id, user_id} = props

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
// const stars = average_rating.toFixed(2)

    return(
    <div className="centered">
        <section className="cards">
        {/* <NavLink style={linkStyles} to={{ 
                    pathname: '/new_gym',
                    state: { gymId: {gym_id}, userId: {user_id}},
                }}
                >Add Gym</NavLink>  */}

        
        
            <article key={uid(name)} id="card" className="card">
                <h3 style={gymName}>{name}</h3>
                {/* {average_rating.toFixed(2) * 20}% */}
                {average_rating}
                {/* <Rating defaultValue={stars} precision={0.0625} readOnly /> */}
                <strong className="art">{art} Focused</strong>
                <p>{address}</p>
                <a className='gym' href={link}>Website Link</a>
                <br />
                <strong><p>Reviews:</p></strong>
                            {review}
                            {/* <ReviewForm gym_name={name} user_id={user_id} gym_id={gym_id} /> */}
                {/* <button style={linkStyles} onClick={(name, user_id, gym_id) => history.push('/reviews')}>Add Review </button> */}
                {/* <Redirect to={{ pathname: "/reviews", state: { gym_id: gym_id }, { user_id: user_id}}}/>Add Review  */}
                <NavLink style={linkStyles} to={{ 
                    pathname: '/reviews',
                    state: { gymId: {gym_id}, userId: {user_id}},
                }}
                >Add Review</NavLink>                
            </article>
        </section>
    </div>
    )
}

export default GymContainer