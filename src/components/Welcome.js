import React from 'react';

class Welcome extends React.Component  {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        const attribute = e.target.name
        const value = e.target.value
        this.setState(() => {
            return {[attribute]: value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users')
        .then((response) => {
            return response.json()
        })
        .then((users) => {
            const user = users.filter(user => user.username === this.state.username)[0]
            this.props.getUser(user)
        })
    }

    render() {
        return (
        <div class="login">
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input name="username" value={this.state.username} type="text" onChange={this.handleChange}></input>
                <label> Password: </label>
                <input name="password" value={this.state.password} type="text" onChange={this.handleChange}></input>
                <input type="submit"/>
            </form>
        </div>
        )
    }
}


export default Welcome;
