import React, { Component } from 'react';
import axios from '../../../axios' //use instance
// import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state ={
        posts: [],
        selectedPostId: null,
        // error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4); //restrict the amount of data only from 0 to 3. actually fetch them all, but only stores 4 of them(0, 1, 2, 3, (exclude 4))
            const updatedPosts =  posts.map (post => {
                return {
                    ...post,
                    author: 'Nhan'
                }
            });
            this.setState({posts: updatedPosts});

            // console.log(response);
        })
        .catch(error => {
            console.log(error);
            // this.setState({error: true});

        }); 
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/posts/' + id});
        // this.props.history.push('/posts' + id); both work
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;// error: true so it will show this line
        if(!this.state.error) {// !true because we use this.setState(error: true)
            posts = this.state.posts.map(post => {
            return(  //<Link to={"/posts/" + post.id} key={post.id} >
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                    //</Link>
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                    <Route path={this.props.match.url + '/:id'} exact component={FullPost}  />{/*make it dynamic*/}
                    {/* <Route path="/posts/:id" exact component={FullPost}  /> */}
            </div>
            
        )
    }
}

export default Posts;
