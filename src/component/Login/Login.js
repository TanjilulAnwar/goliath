import React, { Component } from 'react'
import axios from '../../Api';
import './login.css'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            login: false,
            store: "",
            token: ""
        }
    }




    login() {
        axios.post('Hotel/Login', {
            UserName: this.state.email,
            Password: this.state.password,
            Id: 0
        })
            .then((response) => {
                //  console.log(response.data)
                if (response.data.success) {
                    localStorage.setItem('login', JSON.stringify({
                        login: true,
                        token: response.data.token
                    }))
                    this.setState({ login: true, token: response.data.token })
                    this.props.getdata({ login: this.state.login, token: this.state.token })

                }
                else {

                }

            })
            .catch(function (error) {
                // console.log(`error code:${error.response.status}`);
                if (error.response.status === 401) {
                    alert("Username or Password incorrect!")
                }
            });
    }




    render() {
        return (

            <div className="login">
                <form className="login-form">
                    <div className="login-item">
                    <label className="login-label">Username</label>
                    <input className="login-input" type="text" onChange={(e) => {
                        this.setState({ email: e.target.value })
                    }} />
                    </div>
                   
                    <div className="login-item">
                    <label className="login-label">Password</label>
                    <input className="login-input" type="password" onChange={(e) => {
                        this.setState({ password: e.target.value })
                    }} />
                    </div>
                    <div className="login-item">
                    <button className="login-button" onClick={() => { this.login() }}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}


