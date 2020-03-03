import React, {Redirect} from 'react';
import Board from '../components/Board'

function PaintingsList ({paintings, history}) {

    const handleClick = (painting) =>{
        history.push('/dashboard')
        // history.push({
        //     pathname: "/dashboard",
        //     state: {current_painting: }
        // })
    }

    return (
        <div className="myPaintings">
            <h1>My Paintings:</h1>
            {paintings.map(painting => {
                return (
                    <div>
                        <h2>{painting.title}</h2>
                        <Board boardSize="small" currentGrid={painting.grid} ></Board> 
                        <button onClick={handleClick}>Edit</button>
                    </div>
            )})}
        </div>
    )
}

export default PaintingsList;
