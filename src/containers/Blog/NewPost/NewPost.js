import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false //i
    }

    componentDidMount () {
        //if unauth => this.props.history.replace('/posts');
        console.log(this.props);
    }

    postDataHandler = () => {
        const data ={
            titile: this.state.title,
            body: this.state.body,
            author: this.state.author
        };
        axios.post('/posts', data )
            .then(response => {
                console.log(response);
                this.props.history.push('/posts'); //can use replace to replace and cannot click back button
                // this.setState({submitted: true}); //i
            });        
    }

    render () {
        // let redirect =null;
        // if(this.state.submitted) {
        //     redirect = <Redirect to ="/posts"/> //i conditional redirect
        // }
        return (
            <div className="NewPost">
                {/* {redirect} i */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Nhan">Nhan</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;