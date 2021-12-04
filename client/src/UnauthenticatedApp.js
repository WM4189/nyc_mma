import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function UnauthenticatedApp({ setCurrentUser }) {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

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
      <img
        src="https://res.cloudinary.com/audio/image/upload/v1638648696/guy_fyd5rh.png"
        className="video-thumb tiny"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
        id="vid"
        playsInline
        autoPlay
        loop
        muted
        onLoadedData={onLoadedData}
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
          opacity: isVideoLoaded ? 1 : 0,
        }}
      >
        <source
          src="https://res.cloudinary.com/audio/video/upload/v1638375752/old_guy_sbkpvm.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default UnauthenticatedApp;
