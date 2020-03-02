import React, {useState} from 'react';
import Board from '../components/Board'

function PaintingsList ({paintings}) {

    return (
        <div className="myPaintings">
            <h1>My Paintings:</h1>
            {paintings.map(painting => {
                        return <Board boardSize="small" currentGrid={painting.grid} ></Board> 
            })}
        </div>
    )
}

export default PaintingsList;
