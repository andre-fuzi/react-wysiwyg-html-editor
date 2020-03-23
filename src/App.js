import React from 'react';
import CKEditor from './_components/ckeditor';
import ReactQuill from './_components/react-quill'
import SunEditor from './_components/suneditor'

import "./style.css"

function App() {
  return (
    <div className="App">
      <h1>WYSIWYG HTML Editors</h1>

      <div className="container">
        <CKEditor />
        <ReactQuill />
        <SunEditor />
      </div>
    </div>
  );
}

export default App;
