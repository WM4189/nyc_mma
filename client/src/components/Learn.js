import React from "react";
import LearnNavR from "./LearnNavR";

function Learn(props) {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div>
      <span>{LearnNavR}</span>
      <img
        src="https://res.cloudinary.com/audio/image/upload/v1638648696/guygirl_vfvg0u.png"
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
          src="https://res.cloudinary.com/audio/video/upload/v1638375669/co_ed_cuznuv.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Learn;
