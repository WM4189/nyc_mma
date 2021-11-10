import { useHistory, NavLink } from "react-router-dom";
import {useState, useEffect} from "react";
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const otherStyles = {
    display: "inline-block",
    width: "100px",
    fontSize: "15px",
    fontWeight: "bold",
    // padding: "2px",
    // margin: "0 6px 6px",
    background: "gray",
    justifyContent: 'center',
    padding: 'none',
    // textDecoration: "none",

  };


const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };


// class Bjj extends Component {
//     render(){
        // const {bjj, setBjj} = this.props
        // const bj = bjj.bjj
        // console.log(bjj)
        function Profile (props){
            const {id, username, email, journal} = props.currentUser
            const [jou, setJou] = useState([])
            // console.log(props.currentUser)

            useEffect(() => {
                fetch(`/users/${id}`)
                  .then(res => res.json())
                  .then(jou => {
                      setJou(jou.journal)
                    //   console.log(jou.journal)
                    
                  })
              }, [])

            // console.log(jou)

        function handleSubmit(event, { data }) {
            // event.preventDefault();
            
            fetch(`/users/${id}`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                "journal": data
                })
            })
            // .then(r => r.json())
            // .then(bjj => setBjj(bjj))
            
        }

    return(
        <>
        <h1>{username}'s Training Journal</h1>
        
        <form onSubmit={handleSubmit}>
            {/* <h1><button style={otherStyles} type="submit">Save Edits</button></h1>
                <textarea
                id="art"
                placeholder={bjj}
            value={bjj}
            onChange={(e) => setBjj(e.target.value)}
            >{bjj}</textarea> */}
            <section >
            <label>
                
            </label>

            <CKEditor
                    editor={ ClassicEditor }
                    data={jou}
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
                </section>
                </form>
                </>
    )
}
// }

export default Profile