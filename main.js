// First require the dotenv config file
// require('dotenv').config();

// This checks the mke sure the SECRET_API_KEY is listed in the environment variables
// console.log(process.env);

//Put the secret key in a variable
// const api_key = process.env.SECRET_API_KEY;

// console.log(api_key)

//Marvel API - MAKE THIS WORK//
let arrayOfChars = [];

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts();

};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfChars
const getPosts = (input) => {
  console.log("input",input) 
  fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c444359f78b6de7d9a2474c6d202f855&hash=d956fd20d431cf16afe9b2d6d70d80e7&nameStartsWith=${input}`)
    .then(res => res.json())
    .then(posts => arrayOfChars = posts.data.results)
    .then(() => console.log("Hey",arrayOfChars));
    
    displayChars()
};

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfChars)
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayChars = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfChars.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.name}, URL: ${post.urls}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}