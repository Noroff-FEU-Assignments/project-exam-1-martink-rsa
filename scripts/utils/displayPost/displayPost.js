const createPostFactory = (post) => {
  const embeddedImage =
    post?._embedded['wp:featuredmedia']?.[0].media_details?.sizes?.medium_large
      ?.source_url;
  const imageUrl = embeddedImage ? embeddedImage : '/images/placeholder.png';
  return `<div>
            <h1>${post.title.rendered}</h1>
            <img class="post-image" src=${imageUrl} alt="${post.title.rendered}" />
            <div>${post.content.rendered}</div>
          <div>`;
};

const createPost = (post) => {
  const postToDisplay = createPostFactory(post);
  return postToDisplay;
};

export const displayPost = (post, container) => {
  const postToDisplay = createPost(post);
  container.innerHTML = postToDisplay;
};
