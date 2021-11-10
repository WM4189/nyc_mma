import { useHistory, NavLink } from "react-router-dom";
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


class Thai extends Component {
    render(){
        const {thai, setThai} = this.props
        // console.log(bjj)
        function handleSubmit(event, { data }) {
            // event.preventDefault();
            
            fetch(`/arts/1`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                "thai": data
                })
            })
            .then(r => r.json())
            .then(thai => setThai(thai))
            
        }

    return(
        <>
        <nav>
        <NavLink to="/bjj" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
        <NavLink to="/boxing" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
        <NavLink to="/capoeira" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
        <NavLink to="/jkd" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
        <NavLink to="/thai" style={linkStyles} activeStyle={{background: "gray"}}>Muay Thai</NavLink>
        </nav>
        
        <form onSubmit={handleSubmit}>
            <h1><button style={otherStyles} type="submit">Save Edits</button></h1>
                <textarea
                id="art"
            value={thai}
            onChange={(e) => setThai(e.target.value)}
            ></textarea>
            <section >
            <label>
                
       
            </label>

            <CKEditor
                    editor={ ClassicEditor }
                    data="History..."
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
}

export default Thai