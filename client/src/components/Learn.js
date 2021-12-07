import LearnNavR from "./LearnNavR";
import pic from "../images/guyGirlPic.png";

function Learn(props) {
  return (
    <div>
      <span>{LearnNavR}</span>
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
          src="https://res.cloudinary.com/audio/video/upload/v1638862749/coSauce_jeoqri.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Learn;
