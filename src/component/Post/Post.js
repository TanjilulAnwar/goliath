import React, { Component } from 'react'
import axios from  '../../Api';
import './post.css'
export default class Post extends Component {
    constructor() {
        super();
        this.state={
          message:""
        }
    
      }


    post() {
        let token = "Bearer " + this.state.store.token
        axios.post('/user', {
          data: {
            post: this.state.post
          },
          headers: {
            'Authorization': token
          }
        })
          .then(function (response) {
            this.setState = () => ({
              message: response
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    
    
      }


    render() {
        return (
            <div className="post-container">
             <div className="post-form">
                <textarea rows="100" cols="100"  className="post-textarea" onChange={(e)=>this.setState({post:e.target.value})}
                placeholder="Post something in your feed....">
               </textarea>
        <button  className="post-button" onClick={()=>{this.post()}}>Post</button>
        {this.state.message}
        </div>
            </div>
        )
    }
}


