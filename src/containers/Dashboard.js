import React from 'react';
import Canvas from './Canvas'
import Board from '../components/Board'
import './Containers.css';

class Dashboard extends React.Component {
  
    render() {
        console.log(this.props.userPaintings)
        return (
        <div className="main-page">
            <h1>Create your drawing below</h1>
            <div className="dashboard">
                <Canvas user={this.props.user}/>
                <div className="myGallery">
                    {this.props.userPaintings.map(painting => {
                        return <Board currentGrid={painting.grid}/>
                    })}
                </div>
            </div>
        </div>
        )
    }
}

export default Dashboard;