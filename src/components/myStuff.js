import React, {useState} from 'react';
import Board from '../components/Board'
import './Components.css';

function MyStuff ({paintings, listItems, addCollection}) {
    
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
        <div className={paintings? "myPaintings" : "myCollections"}>
            <h1>{paintings? "My Paintings:" : "My Collections:"} </h1>
            {!paintings && renderCollectionForm()}
            {listItems.map(listItem => {
                        return paintings? <Board boardSize="small" currentGrid={listItem.grid} ></Board> : <h3>{listItem.title}</h3>
            })}
        </div>
    )
}


  

export default MyStuff;
