import {useState} from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";


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

    console.log(gymId.gym_id)
    console.log(userId.user_id.user_id.id)

    

    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    const gId = gymId.gym_id
    const uId = userId.user_id.user_id.id

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
        history.goBack()
        // history.push('/train')
      }

    return(
        <>
        {/* <section style={{display: 'flex', justifyContent: 'center'}}> */}
        <h1>Add New Review</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <input
              type="text"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
          <label>
            Review:
            <input
              type="text"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
          <button style={linkStyles} type="submit">Save</button>
        </form>
      {/* </section> */}
        </>
    )

}

export default ReviewForm