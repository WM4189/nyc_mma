// import { Switch, Redirect, Route, NavLink } from 'react-router-dom'
// import Bjj from '../LearnComp/Bjj'
// import Boxing from '../LearnComp/Boxing'
// import Capoeira from '../LearnComp/Capoeira'
// import Jkd from '../LearnComp/Jkd'
import { NavLink } from 'react-router-dom'


const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };

function Learn (){
    return(
        <div>
            <nav>
            <NavLink to="/bjj" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
            <NavLink to="/boxing" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
            <NavLink to="/capoeira" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
            <NavLink to="/jkd" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
            <NavLink to="/thai" style={linkStyles} activeStyle={{background: "gray"}}>Muay Thai</NavLink>
            </nav>
        <h1>Expand Your Mind</h1>
        </div>
    )
}

export default Learn