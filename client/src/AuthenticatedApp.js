import './App.css';
import Home from './components/Home'
import Learn from './components/Learn'
import Train from './components/Train'
import Profile from './components/Profile'
import ReviewForm from './components/ReviewForm'
import GymForm from './components/GymForm'

import {useState} from "react";
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'


import Bjj from './LearnComp/Bjj'
import Boxing from './LearnComp/Boxing'
import Capoeira from './LearnComp/Capoeira'
import Jkd from './LearnComp/Jkd'
import Thai from './LearnComp/Thai'

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
const [jou, setJou] = useState(currentUser.journal)
const [bjj, setBjj] = useState("")
const [box, setBox] = useState("")
const [cap, setCap] = useState("")
const [jkd, setJkd] = useState("")
const [thai, setThai] = useState("")

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

  

  return (
    <div className="App">
      <nav>
        <span id="header" name="header">
          <NavLink to="/home" style={linkStyles} activeStyle={{background: "gray"}}>Home</NavLink>
          <NavLink to="/learn" style={linkStyles} activeStyle={{background: "gray"}}>Learn</NavLink>
          <NavLink to="/train" style={linkStyles} activeStyle={{background: "gray"}}>Train</NavLink>
          <NavLink to="/profile" style={linkStyles} activeStyle={{background: "gray"}}>{currentUser.username}</NavLink>{" - "}
        </span>
        <span>Logged in as {currentUser.email} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>

        <Route path="/learn">
        <Learn currentUser={currentUser} />
        </Route>

        <Route path="/train">
        <Train currentUser={currentUser} user_id={currentUser} />
        </Route>

        <Route path="/profile">
        <Profile jou={jou} setJou={setJou} currentUser={currentUser} />
        </Route>

        <Route exact path="/home">
          <Home currentUser={currentUser} />
        </Route>

        <Route path='/bjj'>
          <Bjj bjj={bjj} setBjj={setBjj} />
        </Route>

        <Route path='/boxing'>
          <Boxing box={box} setBox={setBox} />
        </Route>

        <Route path='/capoeira'>
          <Capoeira cap={cap} setCap={setCap} />
        </Route>

        <Route path='/jkd'>
          <Jkd jkd={jkd} setJk={setJkd} />
        </Route>

        <Route path='/thai'>
          <Thai thai={thai} setThai={setThai}/>
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