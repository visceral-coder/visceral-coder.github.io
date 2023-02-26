// This script fetches the latest news articles from an API and updates the news section of the webpage.

// Define the API endpoint for fetching news articles
const apiUrl = 'https://www.bloomberg.com/';

// Select the news section of the webpage
const newsSection = document.querySelector('#news');

// Fetch news articles from the API and update the news section
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Iterate over the articles and create HTML elements for each one
    const articles = data.articles.map(article => {
      const articleElement = document.createElement('article');
      const titleElement = document.createElement('h3');
      titleElement.innerHTML = `<a href="${article.url}">${article.title}</a>`;
      const descriptionElement = document.createElement('p');
      descriptionElement.innerText = article.description;
      articleElement.appendChild(titleElement);
      articleElement.appendChild(descriptionElement);
      return articleElement;
    });
    
    // Add the article elements to the news section
    articles.forEach(article => {
      newsSection.appendChild(article);
    });
  })
  .catch(error => {
    console.error('Error fetching news:', error);
  });
