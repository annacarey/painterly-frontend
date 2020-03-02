import React, { useState } from 'react';
import Board from '../components/Board'

function Gallery (props) {


    const [collectionToggle, setCollectionToggle] = useState(false);

    const handleClick = () => {
        setCollectionToggle(!collectionToggle)
    }

    // const handleChange = (id) => {
    //     fetch('http://localhost:3000/collections',{
    //     method: "PATCH",
    //     headers: {'content-type': 'application/json',
    //             accepts: 'application/json'},
    //     body: JSON.stringify({
    //         title: "nothing",
    //         grid: props.currentGrid,
    //         user_id: userId
    //     })}
    //     )
    //     .then(resp => resp.json())
    //     .then(paintingdata => console.log(paintingdata, 'successfully saved painting'))
    // }
    // }

    const showCollections = (collections) => {
        return(
            <select onChange={null}> 
                {collections.map(collection => {
                    return <option>{collection.title}</option>
                })}
            </select>
        )
    }

    return (
        
        props.paintings.map(painting => {
            return <div>
                <h1>{painting.title}</h1>
                <Board boardSize='small' currentGrid={painting.grid}/>
                <button onClick={handleClick}>Add to Collection</button>
                {collectionToggle? showCollections(props.userCollections) : null}
            </div>
        })
    )
}

export default Gallery;