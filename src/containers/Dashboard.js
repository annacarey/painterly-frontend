import React from 'react';
import Canvas from './Canvas'
import Board from '../components/Board'
import CollectionsList from './CollectionsList'
import PaintingsList from './PaintingsList'
import './Containers.css';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

class Dashboard extends React.Component {
  
    render() {
        return (
        <div className="main-page">
            <Switch>
                <Route 
                        path={`${this.props.match.path}/collections`}
                        render = {(routerProps) =>  <CollectionsList {...routerProps} paintings={this.props.paintings} addCollection={this.props.addCollection} collections={this.props.userCollections} paintingCollections={this.props.paintingCollections} userPaintings={this.props.userPaintings} />}
                />

                <Route 
                        path={`${this.props.match.path}/paintings`}
                        render = {(routerProps) =>  <PaintingsList {...routerProps} paintings={this.props.userPaintings}/>}
                />
                <Route 
                        path="/dashboard"
                        render = {(props) =>  
                            <div className="dashboard">
                                <h1 className="create-drawing">Create your drawing below</h1>
                                <Canvas {...props} user={this.props.user} addPainting={this.props.addPainting} />
                        </div>
                        }
                />
            </Switch>
        </div>
        )
    }
}

export default Dashboard;