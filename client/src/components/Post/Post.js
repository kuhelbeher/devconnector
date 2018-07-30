import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import PostItem from '../Posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';

class Post extends Component {
  componentDidMount() {
    const { getPost, match } = this.props;
    getPost(match.params.id);
  }

  render() {
    const {
      post: { post, loading },
    } = this.props;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          {post.comments.map(comment => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(
  mapStateToProps,
  { getPost },
)(Post);
