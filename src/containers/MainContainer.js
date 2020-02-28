import React from 'react';
import Gallery from './Gallery'
import Dashboard from './Dashboard'



class MainContainer extends React.Component {
  
    state = {
        paintings: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/paintings')
        .then((response) => {
            return response.json();
        })
        .then((allPaintings) => {
            // console.log("all paintings:", paintings);
            this.setState({paintings: allPaintings})
        });
    }
  
    render() {
        return (
        <div>
            <Gallery paintings={this.state.paintings} />
            <Dashboard />
        </div>
        )
    }
}

export default MainContainer;
