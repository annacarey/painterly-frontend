import React from 'react';
import Board from '../components/Board'
import Toolbar from '../components/Toolbar'


class Canvas extends React.Component {
  
   state = {
       currentGrid: [],
       currentColor: 'red'
   }
  
   setColorOnClick = (color) => {
       this.setState({currentColor: color})
   }

   
    render() {
        return (
        <div>
           <Board />
           <Toolbar setColor={this.setColorOnClick} currentColor={this.state.currentColor}/>
        </div>
        )
    }
}

export default Canvas;