import React from 'react';
import './App.css';
import FormikForm from './components/Form.js';
import Data from './components/Data.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <FormikForm />
        <Data />
      </div>
    );
  }
}

export default App;
