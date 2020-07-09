import ReactJson from 'react-json-view'
import React, { Component } from 'react';

class ReactJosnView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataUpdate: this.props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({
      dataUpdate: JSON.stringify(evt.updated_src)
    },
      console.log('========', this.state.dataUpdate)
    )
  }

  render() {
    const { value } = this.props
    return (
      <div className='editor-app'>
        <h2>ReactJosnView</h2>
        <a className='site' href='https://www.npmjs.com/package/react-json-view' target='_blank'>acessar site</a>
        <div style={{ width: '100%', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
          <div style={{ width: '48%', heigth: 1100 }}>
            <h3>Editable Data</h3>
            <ReactJson
              src={JSON.parse(this.state.dataUpdate)}
              onEdit={this.handleChange} />
          </div>
          <div style={{ width: '48%', heigth: 1100 }}>
            <h3>View Only</h3>
            <ReactJson
              src={JSON.parse(this.state.dataUpdate)} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactJosnView
