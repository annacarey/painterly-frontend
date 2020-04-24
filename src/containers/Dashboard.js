import React from 'react';
import Canvas from './Canvas'
import Board from '../components/Board'
import CollectionsList from './CollectionsList'
import PaintingsList from './PaintingsList'
import './Containers.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

class Dashboard extends React.Component {
  
    render() {
        const currentPainting = this.props.history.location.state && this.props.history.location.state.currentPainting
        return (
        <Wrapper>
            <Switch>
                <Route 
                        path={`${this.props.match.path}/collections`}
                        render = {(routerProps) =>  <CollectionsList {...routerProps} paintings={this.props.paintings} addCollection={this.props.addCollection} collections={this.props.userCollections} userPaintings={this.props.userPaintings} />}
                />

                <Route 
                        path={`${this.props.match.path}/paintings`}
                        render = {(routerProps) =>  <PaintingsList {...routerProps} paintings={this.props.userPaintings}/>}
                />
                <Route 
                        path="/dashboard"
                        render = {(props) =>  
                            <div className="dashboard">
                                <Canvas {...props} currentPainting={currentPainting} user={this.props.user} addPainting={this.props.addPainting} />
                        </div>
                        }
                />
            </Switch>
        </Wrapper>
        )
    }
}

export default Dashboard;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%
`