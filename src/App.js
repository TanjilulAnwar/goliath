import React, { Component } from 'react'
import Login from './component/Login/Login';
import Post from './component/Post/Post';
import './App.css'


export default class App extends Component {
  constructor() {
    super();
    this.state={
      login:false,
      token:""
    }

  }


  componentDidMount() {
    let store = JSON.parse(localStorage.getItem('login'));
    if (store !== null) {
       console.log(store);
      this.setState({ login: store.login, token: store.token })
    }

  }


  //arrow function required for this.setState
  loginData=(data)=>{
    this.setState({ login: data.login, token: data.token })
    console.log(this.state.token )
  }



  render() {
    return (
      <div className="AppMain">
        <h1 className="AppHeader">Login</h1>
        {
          !this.state.login ? <Login getdata={this.loginData}/>:<Post/>
        }
      </div>
    )
  }
}


