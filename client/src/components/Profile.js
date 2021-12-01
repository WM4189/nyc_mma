import { useState, useEffect } from "react";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Profile(props) {
  const { id, username } = props.currentUser;
  const [jou, setJou] = useState([]);

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((res) => res.json())
      .then((jou) => {
        setJou(jou.journal);
      });
  }, [id]);

  function handleSubmit(event, { data }) {
    fetch(`/users/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        journal: data,
      }),
    });
  }

  return (
    <>
      <h1>{username}'s Training Journal</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <CKEditor
            editor={ClassicEditor}
            data={jou}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleSubmit(data, { data });
            }}
          />
        </section>
      </form>
    </>
  );
}

export default Profile;
