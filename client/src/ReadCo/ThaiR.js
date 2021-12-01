import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import LearnNavR from "../components/LearnNavR";

const otherLinkStyles = {
  width: "85px",
  padding: "2px",
};

function ThaiR(props) {
  const history = useHistory();
  const [thai, setThai] = useState([]);

  useEffect(() => {
    fetch("/arts")
      .then((res) => res.json())
      .then((thai) => {
        setThai(thai[0].thai);
      });
  }, [setThai]);

  const rend = thai.toString();

  return (
    <div>
      {LearnNavR}
      <button style={otherLinkStyles} onClick={() => history.push("/thaiW")}>
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

export default ThaiR;
