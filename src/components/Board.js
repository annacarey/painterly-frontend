import React from 'react';
import Cell from './Cell';
import './Components.css';

function Board (props) {

        return (
        <div>
        <div className="board"> 
          {props.currentGrid.map((row, xCord) => {
                return row.map((cellColor, yCord) => {
                       return  <Cell cellColor={cellColor} paintCell={props.paintCell} key={`${xCord}${yCord}`} xCord={xCord} yCord={yCord} />
                }
                  )
          })}
        </div>
        </div>
        )
    
}

export default Board;

Board.defaultProps = {
        paintCell: () => null,
        currentColor: "#0000FF",
        currentGrid:  [
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
        ]
}