import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import LearnNavR from "../components/LearnNavR";

const otherLinkStyles = {
  width: "85px",
  padding: "2px",
};

function BoxingR(props) {
  const history = useHistory();
  const [box, setBox] = useState([]);

  useEffect(() => {
    fetch("/arts")
      .then((res) => res.json())
      .then((box) => {
        setBox(box[0].boxing);
      });
  }, [setBox]);

  const rend = box.toString();

  return (
    <div>
      {LearnNavR}
      <button style={otherLinkStyles} onClick={() => history.push("/boxingW")}>
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

export default BoxingR;
