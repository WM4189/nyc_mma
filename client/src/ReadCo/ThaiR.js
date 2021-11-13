import { useHistory, useLocation, Redirect, NavLink } from "react-router-dom";
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
    // display: "inline-block",
    width: "85px",
    padding: "2px",
    // margin: "0 6px 6px",
    // background: "transparent",
    // textDecoration: "none",
    // color: "black",  
  };

  function ThaiR (props){
    const history = useHistory();
    const [thai, setThai] = useState([])
  
    useEffect(() => {
        fetch("/arts")
          .then(res => res.json())
          .then(thai => {
            //   console.log(bjj[0].bjj)
            setThai(thai[0].thai)
          })
      }, [setThai])
  
      // console.log(typeof bjj)
  
      const rend = thai.toString()
  
    // console.log(props);
      return(
          <div>
              <nav>
              <NavLink to="/bjjR" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
              <NavLink to="/boxingR" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
              <NavLink to="/capoeiraR" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
              <NavLink to="/jkdR" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
              <NavLink to="/thaiR" style={linkStyles} activeStyle={{background: "gray"}}>Muay Thai</NavLink>
              </nav>
  
          {/* <h1>Expand Your Mind</h1> */}
  
          {/* {ReactHtmlParser(`${bjj}`)} */}
          <button 
          style={otherLinkStyles}
          onClick={() => history.push("/thaiW")} 
          >Edit</button>
          
          <div id="img">
          <div id="card">
          <div id="list">{parse(rend)}</div>
          </div>
          </div>
  
          {/* <video
              autoPlay
              loop
              muted
              style={{
                position: 'fixed',
                width: "100%",
                left: "50%",
                top: "50%",
                height: "115%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
                overflow: "hidden"
              }}
              >
                <source src={Video} type="video/mp4" />
            </video> */}
  
  
  
          </div>
      )
  }
  
  export default ThaiR