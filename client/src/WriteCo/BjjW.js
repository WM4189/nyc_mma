import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LearnNavW from "../components/LearnNavW";

const otherLinkStyles = {
  width: "85px",
  padding: "2px",
};

function BjjW() {
  const history = useHistory();
  const [bjj, setBjj] = useState([]);

  useEffect(() => {
    fetch("/arts")
      .then((res) => res.json())
      .then((bjj) => {
        setBjj(bjj[0].bjj);
      });
  }, []);

  function handleSubmit(event, { data }) {
    fetch(`/arts/1`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bjj: data,
      }),
    });
  }

  return (
    <>
      {LearnNavW}
      <form onSubmit={handleSubmit}>
        <button style={otherLinkStyles} onClick={() => history.push("/bjjR")}>
          Read
        </button>
        <section>
          <div id="img">
            <div id="card">
              <div id="listW">
                <CKEditor
                  editor={ClassicEditor}
                  data={bjj}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    handleSubmit(data, { data });
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default BjjW;
