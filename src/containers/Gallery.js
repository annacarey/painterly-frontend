import React, { useState } from 'react';
import Board from '../components/Board'

function Gallery (props) {

    const [collectionToggle, setCollectionToggle] = useState(false);

    const handleClick = () => {
        setCollectionToggle(!collectionToggle)
    }
    
    let renderedBoards = props.paintings.map(painting => {
        return <div>
            <h1>{painting.title}</h1>
            <Board boardSize='small' currentGrid={painting.grid}/>
            <button onClick={handleClick}>Add to Collection</button>
            {collectionToggle? <h2>THIS RENDERS</h2> : null}
        </div>
    })
        return (
            <div>
                {renderedBoards}
            </div>
        )
}

export default Gallery;