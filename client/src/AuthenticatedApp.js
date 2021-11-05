import './App.css';
// import BooksContainer from './components/BooksContainer'
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'

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
        <span>
          <NavLink to="/home">Home</NavLink>{" - "}
          
        </span>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route path="/home">
          {/* <BooksContainer currentUser={currentUser} /> */}
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;