import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board (props) {
   
        return (
        <div>
        <div className="board"> 
          {props.currentGrid.map((row, xCord) => {
                return row.map((cellColor, yCord) => {
                       return  <Cell currentColor={props.currentColor} key={`${xCord}${yCord}`} xCord={xCord} yCord={yCord} cellColor={cellColor} paintCell={props.paintCell} />
                }
                  )
          })}
        </div>
        </div>
        )
    
}

export default Board;

Board.defaultProps = {
        currentColor: "#0000FF",
        currentGrid:  [
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
        ]
}