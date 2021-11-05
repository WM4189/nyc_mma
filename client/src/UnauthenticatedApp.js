import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Video from './video/old_guy.mp4'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Redirect to="/" />
    </Switch>
    <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1"
            }}
            >
              <source src={Video} type="video/mp4" />
          </video>
    </>
  )
}

export default UnauthenticatedApp