import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import pic from "./images/guyPic.png";

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
        poster={pic}
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
        <source
          src="https://res.cloudinary.com/audio/video/upload/v1638860201/oldSauce_nkxfbi.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default UnauthenticatedApp;
