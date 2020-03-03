import React from 'react';
import Board from './Board'


const CollectionShow = (props) => {
        const id = parseInt(props.match.params.collectionId)
        const targetCollection = (props.collections.find(collection => collection.id === id))




   let paintingCollectionsArr = props.paintingCollections.filter(paintingCollection => paintingCollection.collection_id === id)
   let paintingArr = paintingCollectionsArr.map(paintingCollection => paintingCollection.painting_id)
   const paintings = paintingArr.map(paintingId => {
       return props.paintings.find(painting => painting.id ===paintingId)
   })
   console.log(paintings, "all the paintings yay")
 
        
    return (

        
        <div>
            <h2>Collection Show Component</h2>
            {/* <h2>{targetCollection.title}</h2> */}
            {targetCollection ?  targetCollection.title : "There are no paintings in the collection yet!"}
            
            {paintings && paintings.map(painting => {
                // console.log(painting&& painting.title)
                return <div>
                    <h1>{painting && painting.title}</h1>
                    <Board boardSize='small' currentGrid={painting && painting.grid} />
                     </div>
            })}

        </div>
    )

}

export default CollectionShow;