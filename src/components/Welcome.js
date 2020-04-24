import React from 'react';
import './Components.css';
import styled from 'styled-components'

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
            fetch('https://painterly-api.herokuapp.com/login', {
                method: "POST",
                headers: {'content-type': 'application/json',
                        accepts: 'application/json'},
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
            fetch('https://painterly-api.herokuapp.com/signup',{
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
            <Wrapper>
                <WelcomeHeader>p a i n t e r l y</WelcomeHeader>
                <WelcomeDiv>
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
                </WelcomeDiv>
            </Wrapper>
        )
    }
}
 
export default Welcome;

const WelcomeHeader = styled.div`
    color: #c7d6e7;
    background-color: #629bde;
    font-family: 'Helvetica Neue', sans-serif; 
    font-size: 100px; 
    font-weight: bold; 
    letter-spacing: -1px; 
    transform: skewX(5deg);
    line-height: 1; 
    text-align: center;
`

const WelcomeDiv = styled.div`
    
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c7d6e7;
    justify-content: center;
    width: 100%;
    height: 100%;
`