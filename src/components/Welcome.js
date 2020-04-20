import React from 'react';
import './Components.css';

class Welcome extends React.Component  {

    state = {
        username: "",
        password: "",
        signupToggle: false,
        noUserFoundToggle: false
    }

    componentDidMount() {
        this.props.getUser("") // logs out user
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
            fetch('http://localhost:3000/login', {
                method: "POST",
                headers: {'content-type': 'application/json',
                        'accept': 'application/json'},
                body: JSON.stringify({
                    user: {username: this.state.username,
                    password: this.state.password}
                })
            })
            .then((response) => {
                
                return response.json()
            })
            .then((user) => {
                if (user.errors) {
                    alert(user.errors)
                } else {
                    this.props.getUser(user)
                    this.props.history.push("/dashboard")
                }
            })
        } else if (e.target.name === "signup") {
            fetch('http://localhost:3000/signup',{
            method: "POST",
            headers: {'content-type': 'application/json',
                    accepts: 'application/json'},
            body: JSON.stringify({
                user: {username: this.state.username,
                password: this.state.password}
            })}
            )
            .then(resp => resp.json())
            .then(newUser => {
                console.log(newUser)
                if (newUser.errors) {
                    alert(newUser.errors)
                } else {
                    this.props.getUser(newUser)
                    this.props.history.push("/dashboard")
                }
            })
        }
    }

    handleClick = () => [
        this.setState(prevState => {return {signupToggle: !prevState.signupToggle}})
    ]

    displaySignupForm = 
        <div className="signup-form">
            <h2>Sign Up!</h2>
            <form>
                <input type="text" name="username"/>
            </form>
        </div>
    
    render() {
        return (
            <div>
                <div id="welcomeheader">p a i n t e r l y</div>
        <div className="welcome">
            <br />
            <form>
                <label>Username: </label>
                <input name="username" value={this.state.username} type="text" onChange={this.handleChange}></input>
                <label> Password: </label>
                <input name="password" value={this.state.password} type="password" onChange={this.handleChange}></input> 
                <input className="button" onClick={this.handleFormClick} type="submit" name="login" value="Log in"/> 
                <input className="button" onClick={this.handleFormClick} type="submit" name="signup" value="Sign up"/>
            </form>
            <br />
            {this.state.noUserFoundToggle && <p className="error">Username and/or password incorrect</p>}
            <br />
        </div>
        </div>
        )
    }
}

export default Welcome;
