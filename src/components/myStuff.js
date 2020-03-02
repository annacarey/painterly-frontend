import React from 'react';
import './Components.css';

function myStuff ({paintings, listItems}) {

    return (
        <div className={paintings? "myPaintings" : "myCollections"}>
            <h1>{paintings? "My Paintings:" : "My Collectiongs"} </h1>
            {listItems.map(listItem => {
                        return {paintings? : <Board boardSize="small" currentGrid={listItem.grid} ></Board>: <h3>{listItem.title}</h3>}
            })}
        </div>
    )
}


 


  

export default myStuff;
