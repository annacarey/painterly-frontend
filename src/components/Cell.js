import React, {useState} from 'react';
import './Board.css';

function Cell (props) {

    //hooks for redux
    const [backgroundColor, setBackground] = useState("#ffffff")

    // const backgroundColor = {
    //     backgroundColor: props.cellColor
    // }

    const handleHover = () => {
        //using the hook (for redux)
        setBackground(props.currentColor)
        // props.paintCell(props.xCord, props.yCord)
    }

    return (
        
    <div onMouseOver={handleHover} className="cell" style={{backgroundColor}}>

    </div>
    )
    
}

export default Cell;

// React drag and drop:
// https://react-dnd.github.io/react-dnd/about