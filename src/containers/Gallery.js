import React from 'react';
import Board from '../components/Board'

function Gallery (props) {
    
    let renderedBoards = props.paintings.map(painting => {
        return <div>
            <h1>{painting.title}</h1>
            <Board allBoards={'all'} currentGrid={painting.grid}/>
         
        </div>
    })
  
  
        // console.log('did i get the paintings', this.props.paintings)
        return (
        <div>
            <div>
                    {renderedBoards}
            </div>
        </div>
        )
   
}


export default Gallery;