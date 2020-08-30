import { FETCH_DATA, NEW_DATA } from './types';

export const fetchPosts = () => dispatch => {
  fetch('/events')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_DATA,
        payload: posts
      })
    );
};

export const createPost = () => dispatch => {
  fetch('/events/' + document.getElementById('recipients').value)
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_DATA,
        payload: post
      })
    );
};
