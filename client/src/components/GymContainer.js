import { uid } from "react-uid";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";

const linkStyles = {
  width: "85px",
  padding: "2px",
  color: "black",
  borderRadius: "5px",
  transition:
    "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out",
};

function GymContainer(props) {
  const {
    name,
    address,
    total_reviews,
    average_rating,
    art,
    join,
    gym_id,
    user_id,
  } = props;

  const gymName = {
    textDecoration: "underline",
    fontSize: "25px",
  };

  const review = join.map((rev) => (
    <p key={uid(rev)}>
      <li>
        <em>{rev.review}</em>
      </li>
    </p>
  ));

  const stars = average_rating;
  const map = `https://maps.google.com/?q=${name}+${address}`;

  return (
    <div id="contain">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <article key={uid(name)} className="card">
              <h3 style={gymName}>{name}</h3>
              <strong className="art">{art} Focused</strong>
              <br />
              <div id="stars">
                {stars ? stars.toFixed(2) : "0"}/5{" "}
                <Rating defaultValue={stars} precision={0.25} readOnly />{" "}
                {total_reviews} {total_reviews === 1 ? "Review" : "Reviews"}
              </div>
              <p>{address}</p>
              <strong>Flip to Comment </strong> ➜
            </article>{" "}
          </div>
          <div style={{ color: "black" }} className="flip-card-back">
            <strong>
              <a className="gym" href={map}>
                View Map
              </a>
            </strong>

            <br />
            <strong>
              <p>Reviews:</p>
            </strong>
            {review[0]}
            {review[1]}

            <NavLink
              style={linkStyles}
              to={{
                pathname: "/reviews",
                state: { gymId: { gym_id }, userId: { user_id } },
              }}
            >
              Add Review
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymContainer;
