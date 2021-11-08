import {useState} from "react";
import { useHistory } from "react-router-dom";

const linkStyles = {
    // display: "inline-block",
    width: "85px",
    padding: "2px"
    // margin: "0 6px 6px",
    // background: "transparent",
    // textDecoration: "none",
    // color: "black",
  };

function ReviewForm(props){

    const history = useHistory();

    const [rating, setRating] = useState("");
    const [review, setReview] = useState("")

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
            // "gym_id": ,
            "user_id": props.id
          })
        });
        setRating("")
        setReview("")
        history.goBack()
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
          <button style={linkStyles} type="submit">Save Review</button>
        </form>
      {/* </section> */}
        </>
    )

}

export default ReviewForm