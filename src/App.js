import React from 'react';
import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components'

import './App.css';

function App() {
  
  return (
      <Router>
        <Wrapper>
          <Route path="/" component= {MainContainer} />
        </Wrapper>
      </Router>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

