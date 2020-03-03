import React, {useState} from 'react';
import Board from '../components/Board';
import CollectionShow from '../components/CollectionShow'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



function CollectionsList ({match, collections, addCollection}) {

    
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
        
        
    const renderCollections = collections.map(collection => <Link key={collection.id} to={`/dashboard/collections/${collection.id}`}>{collection.title}</Link>)

 




    return (
        <div className="myCollections">
            <h1>My Collections:</h1>
            {renderCollectionForm()}
            {renderCollections}
            <Route exact path={`${match.path}/:collectionId`} render={routerProps => <CollectionShow {...routerProps} collections={collections} /> } />
        </div>
    )
}

export default CollectionsList;

// {collections.map(collection=> {
//     return <h3>{collection.title}</h3>
// })}
