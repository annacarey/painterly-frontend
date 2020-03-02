import React from 'react';
import './Components.css';

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

    handleFormClick = (e) => {
        e.preventDefault()
        if (e.target.name  === "login") {
            fetch('http://localhost:3000/users')
            .then((response) => {
                return response.json()
            })
            .then((users) => {
                const user = users.filter(user => user.username === this.state.username)[0]
                if (!user) {
                    alert('Not an existing user')
                } else {
                    this.props.getUser(user)
                    this.props.history.push("/dashboard")
                }
            })
        } if (e.target.name === "signup" && this.state.username !== "") {

            fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {'content-type': 'application/json',
                    accepts: 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })}
            )
            .then(resp => resp.json())
            .then(newUser => {
                console.log(newUser)
                this.props.getUser(newUser)
                this.props.history.push("/dashboard")
            })
        }
        else if (e.target.name === "signup" && this.state.username === "") {
            alert('Must submit username')
        }
        // this.props.history.push("/dashboard")
    }

    // handleClick = () => [
    //     this.setState(prevState => {return {signupToggle: !prevState.signupToggle}})
    // ]

    displaySignupForm = 
        <div className="signup-form">
            <h2>Sign Up!</h2>
            <form>
                <input type="text" name="username"/>
            </form>
        </div>
    
    render() {
        return (
        <div className="welcome">
            <form>
                <label>Username: </label>
                <input name="username" value={this.state.username} type="text" onChange={this.handleChange}></input>
                <label> Password: </label>
                <input name="password" value={this.state.password} type="text" onChange={this.handleChange}></input>
                <input onClick={this.handleFormClick} type="submit" name="login" value="Log in"/>
                <input onClick={this.handleFormClick} type="submit" name="signup" value="Sign up"/>
            </form>
            <br></br>
            <br></br>
        </div>
        )
    }
}

export default Welcome;
