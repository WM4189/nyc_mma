import { useHistory, NavLink } from "react-router-dom";

// const linkStyles = {
//     fontSize: ".85em",
//     display: "inline-block",
//     borderRadius: "10px",
//     width: "50",
//     padding: "5px",
//     margin: "0 6px 6px",
//     background: "transparent",
//     textDecoration: "none",
//     color: "black",
//     backgroundColor:"black",
//   transition: "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out" 
//   };

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };


function Bjj (){
const history = useHistory();
    return(
        <>
        <nav>
        <NavLink to="/bjj" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
        <NavLink to="/boxing" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
        <NavLink to="/capoeira" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
        <NavLink to="/jkd" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
        <NavLink to="/thai" style={linkStyles} activeStyle={{background: "gray"}}>Muay Thai</NavLink>
        </nav>
        {/* <div id="art">
        Explore Another Art
        <button style={linkStyles} onClick={() => history.goBack()}></button>
        </div> */}
        </>
    )
}

export default Bjj