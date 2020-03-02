import React, {useState} from 'react';
import Board from '../components/Board';
import { Link } from 'react-router-dom';

function CollectionsList ({collections, addCollection}) {
    
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
        
    const renderCollections = Object.keys(collections).map(collectionID => <Link key={collectionID} to={`/dashboard/collections/${collectionID}`}>{collections[collectionID].title}</Link>)

    return (
        <div className="myCollections">
            <h1>My Collections:</h1>
            {renderCollectionForm()}
            {renderCollections}
        </div>
    )
}

export default CollectionsList;

// {collections.map(collection=> {
//     return <h3>{collection.title}</h3>
// })}
