import {useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import Rating from '@mui/material/Rating';

const linkStyles = {
    width: "85px",
    padding: "2px", 
  };

function ReviewForm(props){
    const history = useHistory();
    const location = useLocation()
    const { gymId, userId } = location.state
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const gId = gymId.gym_id
    const uId = userId.user_id.id

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
        history.push('/train')
        window.location.reload()
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
          <div>
            Review:
            <textarea
              type="text"
              placeholder="Share your experience with this Gym"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              id="review"
            />
          </div> 
          <button style={linkStyles} type="submit">Save</button>
          </section>
        </form>
        </>
    )
}

export default ReviewForm