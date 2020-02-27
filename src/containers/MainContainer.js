import React from 'react';

class MainContainer extends React.Component {
  
    state = {
        paintings: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/paintings')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
    }
  
    render() {
        return (
        <div>HELLO
        </div>
        )
    }
}

export default MainContainer;
