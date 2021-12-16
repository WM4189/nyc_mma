import LearnNavR from "./LearnNavR";
import vid from "../videos/co.mp4";

function Learn(props) {
  return (
    <div>
      <span>{LearnNavR}</span>
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
    </div>
  );
}

export default Learn;
