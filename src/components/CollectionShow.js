import React from 'react';
import Board from './Board'
import {Link} from 'react-router-dom';

const CollectionShow = (props) => {
    const id = parseInt(props.match.params.collectionId)
    const targetCollection = (props.collections.find(collection => collection.id === id))
    const displayPaintings = () => {
        if (targetCollection.paintings && targetCollection.paintings.length > 0 ) {
            return targetCollection.paintings.map(painting => {
                return <div>
                    <h1>{painting && painting.title}</h1>
                    <Board key={painting.id} boardSize='small' currentGrid={painting && painting.grid} />
                        </div>
                })
        } else {
            return <div>
                <p>You don't have any saved paintings yet in this collection... </p>
                <Link to={`/dashboard`}>Go create something new!</Link>
            </div>
        }
    }
    
    return (

        <div>
            <br></br>
            <h3>{targetCollection && targetCollection.title}</h3>            
            {targetCollection && displayPaintings()}
        </div>
    )

}

export default CollectionShow;