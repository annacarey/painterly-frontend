import React from 'react';
import './Board.css';

function Cell (props) {

    const [backgroundColor, setBackground]

    const setBackground = {
        backgroundColor: props.cellColor
    }

    const handleClick = () => {
        props.paintCell(props.xCord, props.yCord)
    }

    return (
    <div onMouseOver={handleClick} className="cell" style={setBackground}>
        
    </div>
    )
    
}

export default Cell;

// React drag and drop:
// https://react-dnd.github.io/react-dnd/about