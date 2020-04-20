import React, {Fragment} from 'react';
import Gallery from './Gallery'
import Dashboard from './Dashboard'
import Welcome from '../components/Welcome'
import NavBar from '../containers/NavBar'
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
            if (newCollection.errors) {
                alert(newCollection.errors)
            }else {
                this.setState(prevState => {
                    newCollection.paintings = []
                    return {collections: [...prevState.collections, newCollection]}
                })
            }
        })
    }

    addPaintingtoCollection = (paintingId, collectionTitle) => {
        const collectionId = this.state.collections.filter(collection => collection.title === collectionTitle)[0].id
        fetch(`http://localhost:3000/painting_collections/`,{
        method: "POST",
        headers: {'content-type': 'application/json',
                accepts: 'application/json'},
        body: JSON.stringify({
            collection_id: collectionId,
            painting_id: paintingId
        })}
        )
        .then(resp => resp.json())
        .then(newPaintingCollection => {
            console.log(newPaintingCollection)
            const newPainting = this.state.paintings.find(painting => painting.id === newPaintingCollection.painting_id)
            this.setState(prevState => {
                 return {collections: prevState.collections.map(collection => collection.id===newPaintingCollection.collection_id ? {...collection, paintings: [...collection.paintings, newPainting]} : collection)
                }
            })
        })
    }
  
    render() {
        const userPaintings = this.state.paintings.filter(painting => painting.user_id ===this.state.user.id)
        const userCollections = this.state.collections.filter(collection => collection.user_id ===this.state.user.id)
        return (
            <Fragment>
                <NavBar user={this.state.user}/>
                <Switch>
                    <Route 
                        exact path='/' 
                        render={props => <Welcome {...props} getUser={this.getUser}/>}
                    />
                    <Route 
                        path='/dashboard' 
                        render={props => <Dashboard {...props} paintings={this.state.paintings} addPainting={this.addPainting} userCollections={userCollections} userPaintings={userPaintings} user={this.state.user} addCollection={this.addCollection} />}
                    />
                    <Route 
                        exact path='/gallery'
                        render={props => <Gallery {...props} user={this.state.user} userCollections={userCollections} paintings={this.state.paintings} addPaintingtoCollection={this.addPaintingtoCollection} />}
                    />
                </Switch>
            </Fragment>
        )
    }
}

export default MainContainer;
