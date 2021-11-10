import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const linkStyles = {
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

class Profile extends Component {
    render(){
        const {id, username, email, journal} = this.props.currentUser;
        const {jou, setJou} = this.props
        // console.log(this.props.currentUser)

        function handleSubmit(event, { data }) {
            // event.preventDefault();
            console.log(data)
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
            .then(r => r.json())
            .then(d => setJou(d))
            
        }

        return(
            <div>
            <h1>{username}'s Training Journal</h1>
            <form onSubmit={handleSubmit}>
            <h1><button style={linkStyles} type="submit">Save Entry</button></h1>
            <section >
            <label>
            {/* <textarea
            value={jou}
            onChange={(e) => setJou(e.target.value)}
            /> */}
            </label>

            <CKEditor
                    editor={ ClassicEditor }
                    data="Journal Away..."
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
            </div>
        )
    }
}

export default Profile