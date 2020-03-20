import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstCompo from './components/FirstCompo'
import ToxicForm from './components/ToxicForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstCompo />
      </header>
      <h1>QA TEAM</h1>
      <ToxicForm />
    </div>
  );
}

export default App;
