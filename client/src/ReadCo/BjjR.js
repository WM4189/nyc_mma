import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import LearnNavR from "../components/LearnNavR";

const otherLinkStyles = {
  width: "85px",
  padding: "2px",
};

function BjjR(props) {
  const history = useHistory();
  const [bjj, setBjj] = useState([]);

  useEffect(() => {
    fetch("/arts")
      .then((res) => res.json())
      .then((bjj) => {
        setBjj(bjj[0].bjj);
      });
  }, [setBjj]);

  const rend = bjj.toString();
  return (
    <div>
      {LearnNavR}
      <button style={otherLinkStyles} onClick={() => history.push("/bjjW")}>
        Edit
      </button>
      <div id="img">
        <div id="card">
          <div id="list">{parse(rend)}</div>
        </div>
      </div>
    </div>
  );
}

export default BjjR;
