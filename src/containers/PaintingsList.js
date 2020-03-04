import React, {useState} from 'react';
import Board from '../components/Board'

function PaintingsList ({paintings, history}) {

    const [currentPainting, setCurrentPainting] = useState("")

    const handleClick = (painting) =>{
        history.push({
            pathname: "/dashboard",
            state: {currentPainting: painting}
        })
    }

    return (
        <div>
        <div className="myPaintings">
            <h1>My Paintings</h1>
        </div>
            <div id="wrap">
            {paintings.map(painting => {
                return (
                    <div>
                        <h2>{painting.title}</h2>
                        <Board boardSize="small" currentGrid={painting.grid} ></Board> 
                        <button onClick={() => handleClick(painting)}>Edit</button>
            </div>
            )})}
        </div>
        </div>
    )
}

export default PaintingsList;
