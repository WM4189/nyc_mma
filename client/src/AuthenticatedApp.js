import './App.css';
import Home from './components/Home'
import Learn from './components/Learn'
import Train from './components/Train'
import Profile from './components/Profile'
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'

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
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>

        <Route path="/learn">
        <Learn currentUser={currentUser} />
        </Route>

        <Route path="/train">
        <Train currentUser={currentUser} />
        </Route>

        <Route path="/profile">
        <Profile currentUser={currentUser} />
        </Route>

        <Route exact path="/home">
          <Home currentUser={currentUser} />
        </Route>
        {/* <Redirect to="/home" /> */}
      </Switch>
      
    </div>
  );
}

export default AuthenticatedApp;