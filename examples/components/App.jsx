import React, { Component } from 'react';

import DualListBox from '../../dist';
import '../../dist/style.css';

class App extends Component {
  state = {
    value: [1],
  };

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const options = [
      {
        label: 'Istanbul',
        value: 1,
      },
      {
        label: 'Antalya',
        value: 2,
      },
      {
        label: 'Ankara',
        value: 3,
      },
    ];

    return (
      <div style={{ width: '640px', margin: 'auto', textAlign: 'center' }}>
        <h5>
          Selected Values (on top level component)
        </h5>

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {this.state.value.map((item, index) =>
            <li key={index}>
              {item}
            </li>
          )}
        </ul>

        <DualListBox
          options={options}
          value={this.state.value}
          valueType="number"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
