import React from 'react';
import MainContainer from './containers/MainContainer'
import NavBar from './containers/NavBar'
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <MainContainer />
    </div>
  );
}

export default App;
