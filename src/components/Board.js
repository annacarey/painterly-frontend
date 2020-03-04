import React, {useState, useEffect} from 'react';
import Cell from './Cell';
import './Components.css';

function Board (props) {

        const [mouseDown, setMouseDown] = useState(false)

        return (
        <div onMouseUp={() => setMouseDown(false)} onMouseDown={() => setMouseDown(true)} className={props.boardSize==="large"? "board" : "gallery"}> 
          {props.currentGrid.map((row, xCord) => {
                return row.map((cellColor, yCord) => {
                       return  <Cell mouseDown={mouseDown} cellSize={props.boardSize} cellColor={cellColor} paintCell={props.paintCell} key={`${xCord}${yCord}`} xCord={xCord} yCord={yCord} />
                }
                  )
          })}
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