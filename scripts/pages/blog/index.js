import { API_BLOG_POSTS } from '../../shared/constants.js';
import { displayPosts } from '../../utils/displayPosts/displayPosts.js';

const postsContainer = document.getElementById('posts-container');

const getData = async (url) => {
  try {
    const response = await fetch(`${url}/?_embed`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    // Set loaders off
  }
};

const handlePosts = (posts) => {
  displayPosts(posts, postsContainer);
};

const main = async () => {
  const posts = await getData(API_BLOG_POSTS);
  handlePosts(posts);
};

main();
