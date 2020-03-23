import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

class SunEditorApp extends Component {

  constructor(props) {
    super(props)
    this.state = { text: '<p>SunEditor is really <em>nice!</em></p>' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  config = {
    buttonList: [
      ['undo', 'redo', 'formatBlock'],
      ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
      ['link']
    ]
  }

  render() {
    return (
      <div>
        <div className='editor-app'>
          <h2>SunEditor</h2>
          <a className='site' href='http://suneditor.com/' target='_blank'>acessar site</a>
          <SunEditor 
            setOptions={this.config}
            setContents={this.state.text}
            placeholder="Please type here..."
            onChange={this.handleChange}/>
          <EditorPreview data={this.state.text} />
        </div>
      </div>
    );
  }
};

class EditorPreview extends Component {
  render() {
      return (
          <div className="editor-preview">
              <p className='editor-type'>HTML output</p>
              <div className="editor-result">{this.props.data}</div>
              <p className='editor-type'>Formated Output</p>
              <div className="editor-result" dangerouslySetInnerHTML={ { __html: this.props.data } }></div>
          </div>
      );
  }
}

EditorPreview.defaultProps = {
  data: ''
};

EditorPreview.propTypes = {
  data: PropTypes.string
};

export default SunEditorApp;