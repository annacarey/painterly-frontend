import React from 'react';
import Canvas from './Canvas'
import Board from '../components/Board'
import './Containers.css';

class Dashboard extends React.Component {
  
    render() {
        return (
        <div className="main-page">
            <h1 className="create-drawing">Create your drawing below</h1>
            <div className="dashboard">
                <Canvas user={this.props.user} addPainting={this.props.addPainting} />
                <div className="myPaintings">
                    <h1>My Paintings:</h1>
                    {this.props.userPaintings.map(painting => {
                        return <Board boardSize="small" currentGrid={painting.grid}/>
                    })}
                </div>
                <div className="myCollections">
                    <h1>My Collections: </h1>
                    {this.props.userCollections.map(collection => {
                        return <h3>{collection.title}</h3>
                    })}
                </div>
            </div>
        </div>
        )
    }
}

export default Dashboard;