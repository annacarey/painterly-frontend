import React, {useState} from 'react';
import './Components.css';

const Cell = React.memo(function Cell (props) {
    const setBackground = {
        backgroundColor: props.cellColor
    }

    const handleHover = () => {
        props.paintCell(props.xCord, props.yCord)
    }

    return (
        <div onMouseOver={handleHover} className={props.cellSize==="large"? "cell" : "small-cell"} style={setBackground}>
        </div>
    )
})  

export default Cell;

// React drag and drop:
// https://react-dnd.github.io/react-dnd/about