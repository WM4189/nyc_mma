import { useHistory } from "react-router-dom";

const linkStyles = {
    fontSize: ".85em",
    display: "inline-block",
    borderRadius: "10px",
    width: "50",
    padding: "5px",
    margin: "0 6px 6px",
    background: "transparent",
    textDecoration: "none",
    color: "black",
    backgroundColor:"black",
  transition: "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out" 
  };

function Boxing (){
    const history = useHistory();
    return(
        <div id="art">
        Explore Another Art
        <button style={linkStyles} onClick={() => history.goBack()}></button>
        </div>
    )
}

export default Boxing