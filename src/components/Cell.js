import React, {useState} from 'react';
import './Board.css';

const Cell = React.memo(function Cell (props) {
    console.log(props)
    //hooks for redux
    // const [backgroundColor, setBackground] = useState("#ffffff")
    const setBackground = {
        backgroundColor: props.cellColor
    }

    const handleHover = () => {
        //using the hook (for redux)
        // setBackground(props.currentColor)
        props.paintCell(props.xCord, props.yCord)
    }

    return (

        
    <div onMouseOver={handleHover} className="cell" style={setBackground}>
    </div>
    )
    
})

 


  

export default Cell;

// React drag and drop:
// https://react-dnd.github.io/react-dnd/about