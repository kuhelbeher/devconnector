import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostItem from './PostItem';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const {
      post: { posts, loading },
    } = this.props;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = posts.map(post => <PostItem key={post._id} post={post} />);
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(
  mapStateToProps,
  { getPosts },
)(Posts);