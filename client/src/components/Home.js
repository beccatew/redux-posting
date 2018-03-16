import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => this.setState({ posts: res.data }) )
  }

  render() {
    return (
      <div className="posts">
      <Header as='h1' textAlign='center'>MySpace Posts & People</Header>
        { this.state.posts.map( post =>
            <div key={post.id}>
              <h2>{post.name}</h2>
              // <Image src={post.image("my-own-slug", "50x50")} />
              <h3>{post.quote}</h3>
            </div>
          )
        }
      </div>
    );
  }

}

export default Home;
