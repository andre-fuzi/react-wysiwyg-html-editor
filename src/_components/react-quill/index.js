import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

class ReactQuillApp extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '<p>Quill is really <em>nice!</em></p>' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline','strike'],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      ['clean'],
      ['link'],
      [{ 'header': [1, 2, false] }],
    ],
  }

  render() {
    return (
      <div className='editor-app'>
        <h2>ReactQuill</h2>
        <a className='site' href='https://github.com/zenoamaro/react-quill' target='_blank'>acessar site</a>
        <ReactQuill value={this.state.text}
          placeholder= 'Compose an epic...'
          theme= 'snow'
          modules={this.modules}
          onChange={this.handleChange} />
        <EditorPreview data={this.state.text} />
      </div>
    );
  }
}

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

export default ReactQuillApp