import {useState} from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import Rating from '@mui/material/Rating';



const linkStyles = {
    // display: "inline-block",
    width: "85px",
    padding: "2px",
    // margin: "0 6px 6px",
    // background: "transparent",
    // textDecoration: "none",
    // color: "black",  
  };

function ReviewForm(props){
    const history = useHistory();

    const location = useLocation()
    const { gymId, userId } = location.state

    // console.log(gymId.gym_id)
    // console.log(userId.user_id.id)

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const gId = gymId.gym_id
    const uId = userId.user_id.id

    // console.log(gId)

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/user_gyms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({
            "rating": rating,
            "review": review,
            "gym_id": gId,
            "user_id": uId
          })
        });
        setRating("")
        setReview("")
        // history.goBack()
        history.push('/train')
      }

    return(
        <>
         
        <h1>Add New Review</h1>
        <form onSubmit={handleSubmit}>
                  <section >
                  Rating:
                  <Rating 
           defaultValue={0} 
           precision={0.5}
           id="rating"
           name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
           /> 

          {/* <label>
            Rating:
            <input
              type="text"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label> */}

{/* 
           <label>
            Rating:
         

            <select
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </label> */}
          <div>
          {/* <label id="review"> */}
            Review:
            <textarea
              type="text"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              id="review"
            />
          {/* </label> */}
          </div> 
          <button style={linkStyles} type="submit">Save</button>
                </section>
        </form>

        </>
    )

}

export default ReviewForm