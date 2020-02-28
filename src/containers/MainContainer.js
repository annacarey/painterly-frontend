import React from 'react';
import Gallery from './Gallery'
import Dashboard from './Dashboard'
import Welcome from '../components/Welcome'

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
  
    render() {
        const userPaintings = this.state.paintings.filter(painting => painting.user_id ===this.state.user.id)
        const userCollections = this.state.collections.filter(collection => collection.user_id ===this.state.user.id)
        return (
        <div>
            <Welcome getUser={this.getUser}/>
            <Dashboard userCollections={userCollections} userPaintings={userPaintings} user={this.state.user}/>
            <Gallery userCollections={userCollections} paintings={this.state.paintings} />
        </div>
        )
    }
}

export default MainContainer;
