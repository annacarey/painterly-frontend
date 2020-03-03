import React, {useState} from 'react';
import Board from '../components/Board'

function PaintingsList ({paintings}) {

    return (
        <div className="myPaintings">
            <h1>My Paintings:</h1>
            {paintings.map(painting => {
                        return (
                        <div>
                            <h2>{painting.title}</h2>
                            <Board boardSize="small" currentGrid={painting.grid} ></Board> 
                        </div>
            )})}
        </div>
    )
}

export default PaintingsList;
