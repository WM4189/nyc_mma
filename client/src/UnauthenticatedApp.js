import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import vid from "./videos/old.mp4";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Redirect to="/" />
      </Switch>
      <video
        id="vid"
        playsInline
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "115%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          overflow: "hidden",
        }}
      >
        <source src={vid} type="video/mp4" />
      </video>
    </>
  );
}

export default UnauthenticatedApp;
