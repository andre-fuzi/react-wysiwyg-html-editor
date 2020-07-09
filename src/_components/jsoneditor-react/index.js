import React, { Component } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import ace from 'brace';
import 'brace/mode/json';

class JSONEditorReact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updatedData: this.props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({
      updatedData: JSON.stringify(evt)
    },
      console.log('========', this.state.updatedData)
    )
  }

  render() {
    const { value } = this.props
    return (
      <div className='editor-app'>
        <h2>JSONEditorReact</h2>
        <a className='site' href='https://github.com/vankop/jsoneditor-react' target='_blank'>acessar site</a>
        <div style={{ width: '100%', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
          <div style={{ width: '48%', heigth: 1100 }}>
            <h3>Editable Data</h3>
            <Editor
              value={JSON.parse(value)}
              onChange={this.handleChange}
              ace={ace}
              mode="code"
              allowedModes={["code", "tree", "form"]}
              htmlElementProps={{ style: { height: 500 } }}
            />
          </div>
          <div style={{ width: '48%', height: 500 }}>
            <h3>View only</h3>
            <Editor
              value={JSON.parse(this.state.updatedData)}
              mode="view"
              htmlElementProps={{ style: { height: 500 } }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default JSONEditorReact