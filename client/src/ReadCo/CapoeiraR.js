import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import LearnNavR from "../components/LearnNavR";

const otherLinkStyles = {
  width: "85px",
  padding: "2px",
};

function CapoeiraR(props) {
  const history = useHistory();
  const [cap, setCap] = useState([]);

  useEffect(() => {
    fetch("/arts")
      .then((res) => res.json())
      .then((cap) => {
        setCap(cap[0].capoeira);
      });
  }, [setCap]);

  const rend = cap.toString();

  return (
    <div>
      {LearnNavR}
      <button
        style={otherLinkStyles}
        onClick={() => history.push("/capoeiraW")}
      >
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

export default CapoeiraR;
