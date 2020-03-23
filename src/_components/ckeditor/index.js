// import React, { Component } from 'react';
// import CKEditor from 'ckeditor4-react';

// class CKEditorApp extends Component {
//     render() {
//         return (
//             <div className="content">
//                 <h2>CKEditor</h2>
//                 <CKEditor
//                   data="<p>Hello from CKEditor 4!</p>"
//                   config={ {
//                     language: 'pt-BR',
//                     toolbar:[ { name: 'clipboard', items: [  'Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste'] },
//                     { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', 'RemoveFormat'] },
//                     { name: 'format', items: [ 'Format', 'List' ]} ],
//                     removeButtons: ''
//                   } }
//                 />
//             </div>
//         );
//     }
// }

// export default CKEditorApp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
CKEditor.disableAutoInline = true;


class CKEditorApp extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            data: '<p>React is really <em>nice</em>!</p>'
        };

        this.onEditorChange = this.onEditorChange.bind( this );
    }

    onEditorChange( evt ) {
        this.setState( {
            data: evt.editor.getData()
        } );
    }

    render() {
        return (
            <div className='editor-app'>
              <h2>CKEditor</h2>
              <a className='site' href='https://ckeditor.com/ckeditor-4/' target='_blank'>acessar site</a>
                <CKEditor
                    data={this.state.data}
                    config={ {
                      language: 'pt-BR',
                      toolbar:[ { name: 'clipboard', items: [  'Undo', 'Redo'] },
                      { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', 'RemoveFormat'] },
                      { name: 'format', items: [ 'Link', 'Format', 'List']} ],
                      removeButtons: ''
                    } }
                    disableAutoInline={true}
                    disableAutoInline='true'
                    type="classic"
                    onChange={this.onEditorChange} />
                    <EditorPreview data={this.state.data} />
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

export default CKEditorApp;