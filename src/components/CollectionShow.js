import React from 'react';
import Board from './Board'


const CollectionShow = (props) => {
    const id = parseInt(props.match.params.collectionId)
    const targetCollection = (props.collections.find(collection => collection.id === id))
    console.log("collection", targetCollection)
    return (

        <div>
            <br></br>
            <h3>{targetCollection && targetCollection.title}</h3>
            <h4>{targetCollection && targetCollection.paintings===[] && "There are no paintings in the collection yet!"}</h4>
            
            {targetCollection && targetCollection.paintings.map(painting => {
            return <div>
                <h1>{painting && painting.title}</h1>
                <Board boardSize='small' currentGrid={painting && painting.grid} />
                    </div>
            })}

        </div>
    )

}

export default CollectionShow;