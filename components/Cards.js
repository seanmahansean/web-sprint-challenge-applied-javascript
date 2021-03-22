// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

let div = document.getElementsByClassName("cards-container");
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        div[0].appendChild(cardMaker(response));
    })
    .catch(err => {
        console.log("error", err);
    })

// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker(obj){
    const board = document.createElement("div");
 
    let lang = obj.data.articles;
 
    for(let k in lang){
        let ex = obj.data.articles[k];
        ex.forEach(element => {
            const card = document.createElement("div");
            const headline = document.createElement("div");
            const auth = document.createElement("div");
            const imgC = document.createElement("div");
            const img = document.createElement("img");
            const authName = document.createElement("span");
 
            card.classList.add("card");
            headline.classList.add("headline");
            auth.classList.add("author");
            imgC.classList.add("img-container");
 
            img.src = element.authorPhoto;
            headline.textContent = element.headline;
            authName.textContent = element.authorName;
 
            card.appendChild(headline);
            card.appendChild(auth);
            auth.appendChild(imgC);
            auth.appendChild(authName);
            imgC.appendChild(img);
 
            card.addEventListener("click", (e) => {
                console.log(headline.textContent);
            })
            board.appendChild(card);
        })
    }
    return board;
}
