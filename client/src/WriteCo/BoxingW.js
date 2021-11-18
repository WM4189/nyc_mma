import { useHistory, NavLink } from "react-router-dom";
import {useState, useEffect} from "react";
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };

  const otherLinkStyles = {
    width: "85px",
    padding: "2px",
  };

  function BoxingW (){
    const history = useHistory();
    const [box, setBox] = useState([])

      useEffect(() => {
          fetch("/arts")
            .then(res => res.json())
            .then(box => {
              setBox(box[0].boxing)
            })
        }, [])

        function handleSubmit(event, { data }) {            
            fetch(`/arts/1`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                "boxing": data
                })
            })            
        }

    return(
        <>
        <nav>
        <NavLink to="/bjjW" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
        <NavLink to="/boxingW" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
        <NavLink to="/thaiW" style={linkStyles} activeStyle={{background: "gray"}}>Thai</NavLink>
        <NavLink to="/jkdW" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
        <NavLink to="/capoeiraW" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
        </nav>
        
        <form onSubmit={handleSubmit}>
          <button 
            style={otherLinkStyles}
            onClick={() => history.push("/boxingR")} 
            >Read
          </button>
          <section>

            <div id="img">
              <div id="card">
                <div id="listW">
                  <CKEditor
                    editor={ ClassicEditor }
                    data={box}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        handleSubmit(data, { data });
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </form>
      </>
    )
}


export default BoxingW