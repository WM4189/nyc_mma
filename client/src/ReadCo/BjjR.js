import { useHistory, NavLink } from "react-router-dom";
import {useState, useEffect} from "react";
import parse from 'html-react-parser';

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };

  const otherLinkStyles = {
    width: "85px",
    padding: "2px",
  };

  function BjjR (props){
    const history = useHistory();
    const [bjj, setBjj] = useState([])
  
    useEffect(() => {
        fetch("/arts")
          .then(res => res.json())
          .then(bjj => {
            setBjj(bjj[0].bjj)
          })
      }, [setBjj])
  
      const rend = bjj.toString()
  
      return(
          <div>
            
            <nav>
            <NavLink to="/bjjR" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
            <NavLink to="/boxingR" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
            <NavLink to="/thaiR" style={linkStyles} activeStyle={{background: "gray"}}>Thai</NavLink>
            <NavLink to="/jkdR" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
            <NavLink to="/capoeiraR" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
            </nav>
          
          <button 
          style={otherLinkStyles}
          onClick={() => history.push("/bjjW")} 
          >Edit</button>
          
          <div id="img">
          <div id="card">
          <div id="list">{parse(rend)}</div>
          </div>
          </div>
          </div>
      )
  }
  
  export default BjjR