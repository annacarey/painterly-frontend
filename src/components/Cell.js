import React from 'react';
import './Board.css';

function Cell (props) {

    const setBackground = {
        backgroundColor: props.cellColor
    }

    const handleClick = () => {
        props.paintCell(props.xCord, props.yCord)
    }

    return (
    <div onClick={handleClick} className="cell" style={setBackground}>
        
    </div>
    )
    
}

export default Cell;