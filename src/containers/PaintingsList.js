import React, {Link} from 'react';
import Board from '../components/Board'

function PaintingsList ({paintings, history}) {

    const handleClick = (painting) =>{
        history.push({
            pathname: "/dashboard",
            state: {currentPainting: painting}
        })
    }

    const displayPaintings = () => {
        if (paintings.length > 0) {
            return paintings.map(painting => {
                return (
                    <div>
                        <h2>{painting.title}</h2>
                        <Board boardSize="small" currentGrid={painting.grid} ></Board> 
                        <button onClick={() => handleClick(painting)}>Edit</button>
                    </div>
            )})
        }
        // } else {
        //     return (<div>
        //         <p>You don't have any saved paintings yet... </p>
        //         <Link to={`/dashboard`}>Go create something new!</Link>
        //     </div>)
        // }
    }

    const showNoPaintings = () => {
        return (<div>
            <p>You don't have any saved paintings yet... </p>
            <Link to={`/dashboard`}>Go create something new!</Link>
        </div>)
    }

    return (
        <div className="myPaintings">
            <h1>My Paintings</h1>
            {displayPaintings()}
        </div>
    )
}

export default PaintingsList;
