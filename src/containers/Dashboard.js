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

                        render = {(routerProps) =>  <CollectionsList {...routerProps} addCollection={this.props.addCollection} collections={this.props.userCollections}/>}
                />

                <Route 
                        path={`${this.props.match.path}/paintings`}
                        render = {() =>  <PaintingsList paintings={this.props.userPaintings}/>}
                />
                <Route 
                        path="/dashboard"
                        render = {() =>  
                            <div className="dashboard">
                                <h1 className="create-drawing">Create your drawing below</h1>
                                <Canvas user={this.props.user} addPainting={this.props.addPainting} />
                        </div>
                        }
                />
            </Switch>
        </div>
        )
    }
}

export default Dashboard;