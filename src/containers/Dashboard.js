import React from 'react';
import Canvas from './Canvas'
import Board from '../components/Board'
import MyStuff from '../components/MyStuff'
import './Containers.css';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

class Dashboard extends React.Component {
  
    render() {
        return (
        <div className="main-page">
            <Switch>
                <Route 
                        path={`${this.props.match.path}/collections`}
                        render = {() =>  <MyStuff paintings={false} addCollection={this.props.addCollection} listItems={this.props.userCollections}/>}
                />
                <Route 
                        path={`${this.props.match.path}/paintings`}
                        render = {() =>  <MyStuff paintings={true} listItems={this.props.userPaintings}/>}
                />
                <Route 
                        path="/dashboard"
                        render = {() =>  
                            <div className="dashboard">
                                <h1 className="create-drawing">Create your drawing below</h1>
                                <Canvas user={this.props.user} addPainting={this.props.addPainting} />
                                <MyStuff user={this.props.user} paintings={true} listItems={this.props.userPaintings} addCollection={null}/>
                                <MyStuff user={this.props.user} paintings={false} listItems={this.props.userCollections} />
                        </div>
                        }
                />
            </Switch>
        </div>
        )
    }
}

export default Dashboard;