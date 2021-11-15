import { Switch, Redirect, Route, NavLink } from 'react-router-dom'
// import Bjj from '../LearnComp/Bjj'
// import Boxing from '../LearnComp/Boxing'
// import Capoeira from '../LearnComp/Capoeira'
// import Jkd from '../LearnComp/Jkd'
import Video from '../video/co_ed.mp4'


const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
    boxShadow: "none",
  };

function Learn (props){
  // console.log(props);
    return(
        <div>
            <nav>
            <NavLink to="/bjjR" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
            <NavLink to="/boxingR" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
            <NavLink to="/thaiR" style={linkStyles} activeStyle={{background: "gray"}}>Thai</NavLink>
            <NavLink to="/jkdR" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
            <NavLink to="/capoeiraR" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
            </nav>

        <video id="vid" className="vid3"
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
          </video>
        </div>
    )
}

export default Learn