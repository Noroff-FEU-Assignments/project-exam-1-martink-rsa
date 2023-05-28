const createPostFactory = (post) => {
  const embeddedImage =
    post?._embedded['wp:featuredmedia']?.[0].media_details?.sizes?.medium_large
      ?.source_url;
  const imageUrl = embeddedImage ? embeddedImage : '/images/placeholder.png';
  return `<div>
            <h3>${post.title.rendered}</h3>
            <img src="${imageUrl}" alt="${post.title.rendered}" class="blog-posts-image" />
            <p>${post.excerpt.rendered}</p>
            <a href="/post/?id=${post.id}&_embed" class="button-link">READ</a>
          <div>`;
};

const createPostsList = (posts) => {
  const postsList = posts.reduce((postsString, post) => {
    postsString += createPostFactory(post);
    return postsString;
  }, '');
  return postsList;
};

export const displayPosts = (posts, container) => {
  const postsList = createPostsList(posts);
  container.innerHTML = postsList;
};
