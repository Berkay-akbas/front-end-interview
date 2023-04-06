import React from 'react';
import './App.css';
import FormItem from './components/formItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormItem id="name" label="Name" type="text" />
      </header>
    </div>
  );
}

export default App;
