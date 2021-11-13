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

  const otherLinkStyles = {
    // display: "inline-block",
    width: "85px",
    padding: "2px",
    // margin: "0 6px 6px",
    // background: "transparent",
    // textDecoration: "none",
    // color: "black",  
  };


// class Bjj extends Component {
//     render(){
        // const {bjj, setBjj} = this.props
        // const bj = bjj.bjj
        // console.log(bjj)
        function BjjW (){
            const history = useHistory();
            const [bjj, setBjj] = useState([])

            useEffect(() => {
                fetch("/arts")
                  .then(res => res.json())
                  .then(bjj => {
                    //   console.log(bjj[0].bjj)
                    setBjj(bjj[0].bjj)
                  })
              }, [])

            //   console.log(bjj)

        function handleSubmit(event, { data }) {
            // event.preventDefault();
            
            fetch(`/arts/1`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                "bjj": data
                })
            })
            // .then(r => r.json())
            // .then(bjj => setBjj(bjj))
            
        }

    return(
        <>
        <nav>
        <NavLink to="/bjjW" style={linkStyles} activeStyle={{background: "gray"}}>BJJ</NavLink>
        <NavLink to="/boxingW" style={linkStyles} activeStyle={{background: "gray"}}>Boxing</NavLink>
        <NavLink to="/thaiW" style={linkStyles} activeStyle={{background: "gray"}}>Muay Thai</NavLink>
        <NavLink to="/jkdW" style={linkStyles} activeStyle={{background: "gray"}}>JKD</NavLink>
        <NavLink to="/capoeiraW" style={linkStyles} activeStyle={{background: "gray"}}>Capoeira</NavLink>
        </nav>
        
        <form onSubmit={handleSubmit}>
        <button 
          style={otherLinkStyles}
          onClick={() => history.push("/bjjR")} 
          >Read</button>
            {/* <h1><button style={otherStyles} type="submit">Save Edits</button></h1>
                <textarea
                id="art"
                placeholder={bjj}
            value={bjj}
            onChange={(e) => setBjj(e.target.value)}
            >{bjj}</textarea> */}
            <section >

            <div id="img">
          <div id="card">
          <div id="listW">
            <CKEditor
                    editor={ ClassicEditor }
                    data={bjj}
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
                </section>
                </form>
                </>
    )
}
// }

export default BjjW