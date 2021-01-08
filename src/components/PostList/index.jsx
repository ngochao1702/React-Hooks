import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts :[],
}

function PostList(props) {
  const { posts } = props;

  return (
    <ul 
      className="list-group list-group-flush mb-4 w-50"
    >
      { posts.map(post => (
        <li 
          key={post.id} 
          className="list-group-item mt-2"
          >{ post.title }</li>
      )) }

    </ul>
  );
}

export default PostList;