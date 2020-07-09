import React from 'react';
import CKEditor from './_components/ckeditor';
import ReactQuill from './_components/react-quill'
import SunEditor from './_components/suneditor'
import JSONEditorReact from './_components/jsoneditor-react'
import ReactJosnView from './_components/react-json-viewer'

import "./style.css"

function App() {
  const data = '{"name":"Jeremy Dorn","age":25,"favorite_color":"#ffa500","gender":"male","date":"","location":{"city":"San Francisco","state":"CA","citystate":"San Francisco, CA"},"pets":[{"type":"dog","name":"Walter"}]}';

  return (
    <div className="App">
      <h1>WYSIWYG HTML Editors</h1>

      <div className="container">
        <JSONEditorReact value={data} />
        <ReactJosnView value={data} />
        {/* <CKEditor />
        <ReactQuill />
        <SunEditor /> */}
      </div>
    </div>
  );
}

export default App;
