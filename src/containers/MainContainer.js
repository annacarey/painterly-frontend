import React from 'react';
import Gallery from './Gallery'
import Dashboard from './Dashboard'
import Welcome from '../components/Welcome'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

class MainContainer extends React.Component {
  
    state = {
        paintings: [],
        collections: [],
        user: ""
    }

    componentDidMount() {

        // Get all paintings
        fetch('http://localhost:3000/paintings')
        .then((response) => {
            return response.json();
        })
        .then((paintings) => {
            this.setState({paintings})
        })

        // Get all collections
        fetch('http://localhost:3000/collections')
        .then((response) => {
            return response.json();
        })
        .then((collections) => {
            this.setState({collections})
        })
    }

    getUser = (user) => {
        this.setState({user: user})
    }

    addPainting = (painting) => {
        this.setState(prevState => {
            return {paintings: [...prevState.paintings, painting]}
        })
    }

    addCollection = (title) => {
        console.log(this.state.user.id)
        fetch('http://localhost:3000/collections',{
        method: "POST",
        headers: {'content-type': 'application/json',
                accepts: 'application/json'},
        body: JSON.stringify({
            title: title, 
            user_id: this.state.user.id
        })}
        )
        .then(resp => resp.json())
        .then(newCollection => {
            console.log(newCollection)
            this.setState(prevState => {
                return {collections: [...prevState.collections, newCollection]}
            })
        })
    }
  
    render() {
        const userPaintings = this.state.paintings.filter(painting => painting.user_id ===this.state.user.id)
        const userCollections = this.state.collections.filter(collection => collection.user_id ===this.state.user.id)
        return (
        <Switch>
            <Route 
                exact path='/welcome' 
                render={props => <Welcome {...props} getUser={this.getUser}/>}
            />
            <Route 
                path='/dashboard' 
                render={props => <Dashboard {...props} addPainting={this.addPainting} userCollections={userCollections} userPaintings={userPaintings} user={this.state.user} addCollection={this.addCollection} />}
            />
            <Route 
                exact path='/gallery'
                render={props => <Gallery {...props} user={this.state.user} userCollections={userCollections} paintings={this.state.paintings} />}
            />
        </Switch>

        )
    }
}

export default MainContainer;
