import React from 'react';
import MainContainer from './containers/MainContainer'
import NavBar from './containers/NavBar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';

function App() {
  
  return (
      <Router>
        <div className="application">
          <NavBar />
          <Route path="/" component= {MainContainer} />
        </div>
      </Router>
  );
}

export default App;


