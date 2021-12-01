import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import LearnNavR from "../components/LearnNavR";

const otherLinkStyles = {
  width: "85px",
  padding: "2px",
};

function JkdR(props) {
  const history = useHistory();
  const [jkd, setJkd] = useState([]);

  useEffect(() => {
    fetch("/arts")
      .then((res) => res.json())
      .then((jkd) => {
        setJkd(jkd[0].jkd);
      });
  }, [setJkd]);

  const rend = jkd.toString();

  return (
    <div>
      {LearnNavR}
      <button style={otherLinkStyles} onClick={() => history.push("/jkdW")}>
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

export default JkdR;
