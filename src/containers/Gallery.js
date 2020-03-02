import React, { useState } from 'react';
import Board from '../components/Board'

function Gallery (props) {

    const [collection, setCollection] = useState("")

    const handleChange = () => {
        
    }

    const addToCollectionOption = (collections) => {
        return(
            <form>
                <select onChange={null}> 
                    {collections.map(collection => {
                        return <option>{collection.title}</option>
                    })}
                </select>
                <input type="submit" value="Add to Collection"></input>
            </form>
        )
    }

    return (
        
        props.paintings.map(painting => {
            return <div>
                <h1>{painting.title}</h1>
                <Board boardSize='small' currentGrid={painting.grid}/>
                {props.user!=="" && addToCollectionOption(props.userCollections)}
            </div>
        })
    )
}

export default Gallery;