import './App.css';
import Home from './components/Home'
import Read from './components/Read'
import Learn from './components/Learn'

import Write from './components/Write'
import Train from './components/Train'

import Profile from './components/Profile'
import ReviewForm from './components/ReviewForm'
import GymForm from './components/GymForm'


import {useState, useEffect} from "react";
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'


import BjjW from './WriteCo/BjjW'
import BoxingW from './WriteCo/BoxingW'
import CapoeiraW from './WriteCo/CapoeiraW'
import JkdW from './WriteCo/JkdW'
import ThaiW from './WriteCo/ThaiW'


import BjjR from './ReadCo/BjjR'
import BoxingR from './ReadCo/BoxingR'
import CapoeiraR from './ReadCo/CapoeiraR'
import JkdR from './ReadCo/JkdR'
import ThaiR from './ReadCo/ThaiR'

const linkStyles = {
  display: "inline-block",
  borderRadius: "20px",
  width: "100px",
  padding: "5px",
  margin: "0 6px 6px",
  background: "transparent",
  textDecoration: "none",
  color: "black",
  backgroundColor:"transparent",
  transition: "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out" 
};



function AuthenticatedApp({ currentUser, setCurrentUser }) {
const [arts, setArts] = useState([])
// const [bjj, setBjj] = useState("")
// const [box, setBox] = useState("")
// const [cap, setCap] = useState("")
// const [jkd, setJkd] = useState("")
// const [thai, setThai] = useState("")

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
        }
      })
  }

  useEffect(() => {
    fetch("/arts")
      .then(res => res.json())
      .then(arts => {
        setArts(arts)
        // setBjj(arts[0].bjj)
      })
  }, [setArts])

  // console.log(arts[0].bjj)
  // console.log(bjj)
  
// const thing = arts[0].bjj
  return (
    <div className="App">
      <nav>
        <span id="header" name="header">
          <NavLink to="/home" style={linkStyles} activeStyle={{background: "gray"}}>Home</NavLink>
          <NavLink to="/train" style={linkStyles} activeStyle={{background: "gray"}}>Train</NavLink>
          <NavLink to="/learn" style={linkStyles} activeStyle={{background: "gray"}}>Learn</NavLink>
          {/* <NavLink to="/read" style={linkStyles} activeStyle={{background: "gray"}}>Read</NavLink>
          <NavLink to="/write" style={linkStyles} activeStyle={{background: "gray"}}>Write</NavLink> */}
          {/* <NavLink to="/profile" style={linkStyles} activeStyle={{background: "gray"}}>{currentUser.username}</NavLink>{" - "} */}
          <NavLink to="/profile" style={linkStyles} activeStyle={{background: "gray"}}>{currentUser.username}</NavLink>

        </span>
        <span>Logged in as {currentUser.email} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      {/* {thing} */}
      <Switch>

        <Route path="/learn">
        <Learn arts={arts} currentUser={currentUser} />
        </Route>

        <Route path="/read">
        <Read arts={arts} currentUser={currentUser} />
        </Route>

        <Route path="/write">
        <Write arts={arts} currentUser={currentUser} />
        </Route>

        <Route path="/train">
        <Train currentUser={currentUser} user_id={currentUser} />
        </Route>

        <Route path="/profile">
        <Profile currentUser={currentUser} />
        </Route>

        <Route exact path="/home">
          <Home currentUser={currentUser} />
        </Route>

        <Route path='/bjjW'>
          <BjjW  />
        </Route>

        <Route path='/bjjR'>
          <BjjR  />
        </Route>

        <Route path='/boxingW'>
          <BoxingW  />
        </Route>

        <Route path='/boxingR'>
          <BoxingR  />
        </Route>

        <Route path='/capoeiraW'>
          <CapoeiraW  />
        </Route>


        <Route path='/capoeiraR'>
          <CapoeiraR  />
        </Route>

        <Route path='/jkdW'>
          <JkdW />
        </Route>

        <Route path='/jkdR'>
          <JkdR />
        </Route>

        <Route path='/thaiW'>
          <ThaiW />
        </Route>

        <Route path='/thaiR'>
          <ThaiR />
        </Route>

        <Route path='/reviews'>
          <ReviewForm  />
        </Route>

        <Route path='/new_gym'>
          <GymForm  />
        </Route>

        <Redirect to="/home" />
      </Switch>
      
    </div>
  );
}

export default AuthenticatedApp;