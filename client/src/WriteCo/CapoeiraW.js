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

function CapoeiraW() {
  const history = useHistory();
  const [cap, setCap] = useState([]);

  useEffect(() => {
    fetch("/arts")
      .then((res) => res.json())
      .then((cap) => {
        setCap(cap[0].capoeira);
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
        capoeira: data,
      }),
    });
  }

  return (
    <>
      {LearnNavW}
      <form onSubmit={handleSubmit}>
        <button
          style={otherLinkStyles}
          onClick={() => history.push("/capoeiraR")}
        >
          Read
        </button>
        <section>
          <div id="img">
            <div id="card">
              <div id="listW">
                <CKEditor
                  editor={ClassicEditor}
                  data={cap}
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

export default CapoeiraW;
