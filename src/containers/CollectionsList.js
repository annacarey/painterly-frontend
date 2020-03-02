import React, {useState} from 'react';
import Board from '../components/Board'

function CollectionsList ({collections, addCollection, paintingCollections}) {
    console.log(paintingCollections)
    
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        addCollection(title)
    }

    const renderCollectionForm = () => {
        return <div className="collection-form">
            <p>Create a new collection:</p>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text"></input>
                <input type="submit" value="Create"></input>
            </form>
        </div>
    }
    return (
        <div className="myCollections">
            <h1>My Collections:</h1>
            {renderCollectionForm()}
            {collections.map(collection=> {
                return <h3>{collection.title}</h3>
            })}
        </div>
    )
}

export default CollectionsList;
