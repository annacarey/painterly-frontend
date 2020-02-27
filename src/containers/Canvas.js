import React from 'react';
import Board from './components/Board'
import Toolbar from './components/Toolbar'


class Canvas extends React.Component {
  
   
  
    render() {
        return (
        <div>
           <Board />
           <Toolbar />
        </div>
        )
    }
}

export default Canvas;