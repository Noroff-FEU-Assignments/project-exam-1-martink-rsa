import { API_BLOG_POSTS } from '../../shared/constants.js';
import { displayPost } from '../../utils/displayPost/displayPost.js';

const postsContainer = document.getElementById('posts-container');

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    // Set loaders off
  }
};

const handlePost = (post) => {
  displayPost(post, postsContainer);
};

const main = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const postId = urlParams.get('id');
  const url = `${API_BLOG_POSTS}/${postId}?_embed`;
  const post = await getData(url);
  handlePost(post);
};

main();
