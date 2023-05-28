import { API_BLOG_POSTS } from '../../shared/constants.js';

const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const slide = carousel.querySelector('.carousel-slide');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');

const slideWidth = carousel.clientWidth;
let slideIndex = 0;

function insertImages(images) {
  const imagesHtml = images
    .map(
      (image) =>
        `<a href="${image.link}"><img src="${image.url}" alt="Image"></a>`,
    )
    .join('');
  slide.innerHTML = imagesHtml;
}

function navigateCarousel() {
  container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (slideIndex < slide.children.length - 5) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  navigateCarousel();
});

prevButton.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slide.children.length - 5;
  }
  navigateCarousel();
});

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

function getImageUrls(posts) {
  const imageUrls = posts.map((post, index) => {
    const embeddedImage =
      post?._embedded['wp:featuredmedia']?.[0].media_details?.sizes
        ?.medium_large?.source_url;
    const imageUrl = embeddedImage ? embeddedImage : '/images/placeholder.png';
    return { url: imageUrl, link: `/post/?id=${post.id}` };
  });
  return imageUrls;
}

async function main() {
  const posts = await getData(API_BLOG_POSTS);
  const imageUrls = getImageUrls(posts);
  insertImages(imageUrls);
  navigateCarousel();
}

main();
