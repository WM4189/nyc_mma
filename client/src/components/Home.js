import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const history = useHistory();
  return (
    <>
      <div id="center">
        <div className="box-2">
          <div className="btn btn-two">
            <span>
              <button
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "50%",
                  boxShadow: "none",
                  fontFamily: "Permanent Marker, cursive",
                }}
                onClick={() => history.push("/welcome")}
              >
                Welcome
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* <img
        src="https://res.cloudinary.com/audio/image/upload/v1638648694/girl_hvmnco.png"
        className="video-thumb tiny"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      /> */}
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
          opacity: isVideoLoaded ? 1 : 0
        }}
      >
        <source
          src="https://res.cloudinary.com/audio/video/upload/v1638375772/young_girl_tmpd97.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default Home;
