import axios from "axios";

const Card = (article) => {

  const cardDiv = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const imgCon = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  cardDiv.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  imgCon.classList.add('img-container');

  cardHeadline.textContent = article.headline
  authorName.textContent = article.author
  authorImg.setAttribute('src', article.authorPhoto)

  cardDiv.appendChild(cardHeadline);
  cardDiv.appendChild(cardAuthor);
  cardAuthor.appendChild(imgCon);
  imgCon.appendChild(authorImg);
  cardAuthor.appendChild(authorName);

  cardDiv.addEventListener('click', () => {
    cardDiv.classList.toggle(console.log(cardHeadline))
  })

  return cardDiv;


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  const articles = axios.get("http://localhost:5000/api/articles")
  .then(resp => {
    const cardsCon = document.querySelector(selector);
    const cardList = resp.data.articles;
    const cardFunc = Card(cardList);
    cardsCon.appendChild(cardFunc);
  })

  return articles;

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
