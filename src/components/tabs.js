import axios from 'axios';

const Tabs = (topics) => {

  const topicsTab = document.createElement('div');
  topicsTab.classList.add('topics');

  topics.forEach(topic => {
    const topicR = document.createElement('div');
    topicR.classList.add('tab');
    topicR.textContent = topic
    topicsTab.appendChild(topicR);
  })

  return topicsTab;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
}




const tabsAppender = (selector) => {

  const results = axios.get("http://localhost:5000/api/topics")
  
  results.then(resp => {
    const tabsContainer = document.querySelector(selector);
    const topicsList = resp.data.topics;
    const tabsFunc = Tabs(topicsList);
    tabsContainer.appendChild(tabsFunc);
  })

  return results;

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
