/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    document.querySelectorAll('p')

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const jumbotron = document.querySelector("#jumbotronText");
console.log(jumbotron);

const paragraphsInPrimary = document.querySelectorAll(".primary-content p");
console.log(paragraphsInPrimary);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const myAlertButton = document.querySelector("#alertBtn");

myAlertButton.addEventListener("click", (event) => {
  alert("Thanks for visiting Bikes for Refugees!");
});

const articleInput = document.querySelector("#addArticleInput");

articleInput.addEventListener("keyup", (event) =>
  console.log(event.target.value)
);

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

const myChangeButton = document.querySelector("#bgrChangeBtn");
const bodyOfPage = document.querySelector("body");

myChangeButton.addEventListener("click", (event) => {
  bodyOfPage.style.backgroundColor = "pink";
  myChangeButton.style.backgroundColor = "red";
  // bodyOfPage.classList.add(background--red)
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

const largeSize = document.querySelector("#largerLinksBtn");
const aTags = document.querySelectorAll("a");

largeSize.addEventListener("click", (event) => {
  aTags.forEach((tag) => {
    tag.style.fontSize = "1.5em";
  });
  // for (let eachButton of aTags) {
  //   eachButton.style.fontSize = "1.5em";
  // }
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const addText = document.querySelector("#addArticleBtn");

addText.addEventListener("click", (event) => {
  const articleInput1 = document.querySelector("#addArticleInput").value;

  const newInfo = document.createElement("p");

  newInfo.innerText = articleInput1;

  let addedInfo = document.querySelector("#addArticle");

  addedInfo.appendChild(newInfo);
});

const donateBtn = document.querySelector("#donateBtn");

donateBtn.addEventListener("click", (event) => {
  const thanksMessage = document.createElement("div");

  thanksMessage.innerText = "Thank you for your donation";
  thanksMessage.style.textAlign = "center";

  const parent = document.querySelector(".site-header");

  parent.appendChild(thanksMessage);
});
