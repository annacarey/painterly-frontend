import React, { useState } from 'react';
import Board from '../components/Board'
import '../components/Components.css';


function Gallery (props) {

    const [collection, setCollection] = useState(props.user!==""? props.userCollections[0].title : "")

    const handleChange = (e) => {
        setCollection(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const paintingId = parseInt(e.target.name)
        props.addPaintingtoCollection(paintingId, collection)
    }

    const addToCollectionOption = (collections, painting) => {
        return(
            <div class='custom-select'>
            <form onSubmit={handleSubmit} name={painting.id}>
                <select onChange={handleChange}> 
                    {collections.map(collection => {
                        return <option>{collection.title}</option>
                    })}
                </select>
                <input className="collection-button" type="submit" value="Add to Collection"></input>
            </form>
            </div>
        )
    }

    return (
        <div>
        <div className="myGallery">
            <h1>Gallery</h1>
        </div>
        <div id="wrap">
            {props.paintings.map(painting => 
                <div className='gallerypaintings'>
                    <h2>{painting.title}</h2>
                    <Board boardSize='small' currentGrid={painting.grid}/>
                    {props.user!=="" && addToCollectionOption(props.userCollections, painting)}
                </div>)}
        </div>             
        </div>)
    
}

export default Gallery;