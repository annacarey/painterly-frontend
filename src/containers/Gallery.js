import React, { useState, useEffect } from 'react';
import Board from '../components/Board'
import '../components/Components.css';
import styled from 'styled-components'


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
                    <input className="collection-button" type="submit" value="Add to Collection"></input>
                </form>
            )
        }
    }

    return (
        <Wrapper>
            <div className="myGallery">
                <h1>Gallery</h1>
            </div>
            <div id="wrap">
                {props.paintings.map(painting => 
                    <div className='gallerypaintings'>
                        <h2>{painting.title}</h2>
                        <Board key={painting.id} boardSize='small' currentGrid={painting.grid}/>
                        {props.user!=="" && addToCollectionOption(props.userCollections, painting)}
                    </div>)}
            </div>             
        </Wrapper>)
}

export default Gallery;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
`