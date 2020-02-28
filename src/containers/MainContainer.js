import React from 'react';
import Gallery from './Gallery'
import Dashboard from './Dashboard'
import Welcome from '../components/Welcome'

class MainContainer extends React.Component {
  
    state = {
        paintings: [],
        user: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/paintings')
        .then((response) => {
            return response.json();
        })
        .then((paintings) => {
            this.setState({paintings})
        });
    }

    getUser = (user) => {
        this.setState({user: user})
    }
  
    render() {
        const userPaintings = this.state.paintings.filter(painting => painting.user_id ===this.state.user.id)
        return (
        <div>
            <Welcome getUser={this.getUser}/>
            <Dashboard userPaintings={userPaintings} user={this.state.user}/>
            <Gallery paintings={this.state.paintings} />
        </div>
        )
    }
}

export default MainContainer;
