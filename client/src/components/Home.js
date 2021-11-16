import Video from '../video/young_girl.mp4'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState, useEffect} from "react";


function Home (){

  const [share, setShare] = useState([])
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
      fetch("/arts")
        .then(res => res.json())
        .then(share => {
          // console.log(share[0].share)
          setShare(share[0].share)
        })
    }, [])

    function handleSubmit(event, { data }) {
      // event.preventDefault();
      
      fetch(`/arts/1`, {
          method: 'PATCH',
          credentials: 'include',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
          "share": data
          })
      })
      // .then(r => r.json())
      // .then(bjj => setBjj(bjj))
      
  }
    
    return(
        <>

            {toggle ?
              null
                :<>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              <div class="box-2">
              <div class="btn btn-two">
              <span>
              <button 
              style={{
                backgroundColor: "transparent",
                borderRadius: "50%",
                boxShadow: "none",
                fontFamily: 'Permanent Marker, cursive'
              }} 
              onClick={() => setToggle(!toggle)}>
              Welcome
              </button>
              </span>
              </div>
              </div>
              </>
            }


            {toggle ?
            <>
                      <div id="img">
                      <div id="card">
                      <div id="list">
                <CKEditor
                    editor={ ClassicEditor }
                    data={share}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        handleSubmit(data, { data });
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> 
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
                          <source src={Video} type="video/mp4" />
                      </video>
                      </>
                :
                <>
                        <video id="vid" 
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
                }
            
  
        {/* <strong><em><h1>NYC MMA</h1></em></strong> */}

        </>
    )
}

export default Home