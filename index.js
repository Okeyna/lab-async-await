// Write your code here!
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postList = document.getElementById('post-list');

const fetchPosts = async () => {
  try {
    const response = await fetch(apiUrl);
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const displayPosts = (posts) => {
  postList.innerHTML = '';
  posts.forEach(post => {
    const postListItem = document.createElement('li');
    const postTitle = document.createElement('h1');
    const postBody = document.createElement('p');
    postTitle.textContent = post.title;
    postBody.textContent = post.body;
    postListItem.appendChild(postTitle);
    postListItem.appendChild(postBody);
    postList.appendChild(postListItem);
  });
};

document.addEventListener('DOMContentLoaded', fetchPosts);