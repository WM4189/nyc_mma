import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState, useEffect} from "react";
import parse from 'html-react-parser';


function HomeWelcome(){

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
  
      const rend = "<h2>Welcome to NYC MMA</h2><figure class=\'table\'><table><tbody><tr><td><h4>This is a crowd sourced library for martial arts gyms in the New York City metropolitan area. &nbsp; &nbsp;</h4><h4>If you are new to the world of martial arts or a seasoned brawler, the <i><strong>Learning</strong></i> tab includes a brief background of a few art forms. &nbsp;Feel free to review and add information as you see fit.</h4><h4>Below is the community bulletin board for events, comments, questions and anything else you would like to share.</h4><h4>See you on the mats!</h4></td></tr></tbody></table></figure>"
  
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
            <div id="img">
            <div id="card">
            <div id="list">{parse(rend)}</div>
            </div>
            </div>
            <br/>
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
        </>
    )
}

export default HomeWelcome