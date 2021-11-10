import Video from '../video/young_girl.mp4'

function Home (){
    return(
        <>
        {/* <strong><em><h1>NYC MMA</h1></em></strong> */}
        <video
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
              <source src={Video} type="video/mp4" />
          </video>
        </>
    )
}

export default Home