import React from 'react';
import Board from '../components/Board'
import Toolbar from '../components/Toolbar'
import './Containers.css';
import {grid1, grid2, grid3} from './grid.js'

class Canvas extends React.Component {
  
   state = {
       currentGrid: grid2,
       currentColor: "#0000FF"
   }

   paintCell = (xCoordinate, yCoordinate) => {
       const newGrid = this.state.currentGrid.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                if (rowIndex === xCoordinate && cellIndex ===yCoordinate) {
                    cell = this.state.currentColor
                }
                return cell
            })
        }) 
        this.setState(() => {
            return {currentGrid: newGrid}
        }) 
    }

   setColorOnClick = (color) => {
       this.setState({currentColor: color})
   }

   
    render() {
        return (
        <div className="canvas">
            <div className="toolbar">
                <Toolbar setColor={this.setColorOnClick} currentColor={this.state.currentColor}/>
            </div>
            <Board currentGrid={this.state.currentGrid} paintCell = {this.paintCell}/>
        </div>
        )
    }
}

export default Canvas;

// props for board: 
// currentColor={this.state.currentColor} currentGrid={this.state.currentGrid}