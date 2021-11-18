import Video from '../video/young_girl.mp4'
import { useHistory } from "react-router-dom";

function Home (){
  const history = useHistory();
  return(
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
                    fontFamily: 'Permanent Marker, cursive'
                  }} 
                  onClick={() =>  history.push("/welcome")}>
                  Welcome
                  </button>
                </span>
              </div>
            </div>
          </div>
          <video id="vid" 
          playsInline
          autoPlay
          loop
          muted
          style={{
            position: 'fixed',
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            overflow: "hidden"
          }}
          >
          <source src={Video} type="video/mp4"/>
        </video>
      </>
  )
}

export default Home