import React, { useState, useEffect } from 'react';
import Board from '../components/Board'

function Gallery (props) {

    const [collection, setCollection] = useState("")

    useEffect(() => {
        if (props.userCollections.length > 0) {
            setCollection(props.userCollections[0].title)
        }
    }, [])

    const handleChange = (e) => {
        setCollection(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const paintingId = parseInt(e.target.name)
        props.addPaintingtoCollection(paintingId, collection)
    }

    const addToCollectionOption = (collections, painting) => {
        if (collections.length > 0) {
            return(
                <form onSubmit={handleSubmit} name={painting.id}>
                    <select onChange={handleChange}> 
                        {collections.map(collection => {
                            return <option>{collection.title}</option>
                        })}
                    </select>
                    <input type="submit" value="Add to Collection"></input>
                </form>
            )
        } 
    }

    return (
        
        props.paintings.map(painting => {
            return <div>
                <h1>{painting.title}</h1>
                <Board key={painting.id} boardSize='small' currentGrid={painting.grid}/>
                {props.user!=="" && addToCollectionOption(props.userCollections, painting)}
            </div>
        })
    )
}

export default Gallery;