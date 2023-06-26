let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  function selMainTitle(){
  document.querySelector("#main-title").textContent="Hi my name is DOM. Welcome!";
  }
  selMainTitle();
  // Part 2
  function selBody(){
  document.querySelector("body").style.backgroundColor= "purple";
  }
  selBody();
  // Part 3
  function remLastLi(){
  let list= document.querySelector("#favorite-things");
  let listItems= document.querySelector("#favorite-things").getElementsByTagName("li");
  list.removeChild(listItems[listItems.length-1]);
  }
  remLastLi();
  // Part 4
  function cFS(){
    let specTitle= document.querySelectorAll(".special-title");
    for (let i =0; i<specTitle.length; i++){
        specTitle[i].style.fontSize = "2rem";
    }
  }
  cFS();
  // Part 5
function removeRace(){
  let list= document.querySelector("#past-races") ;
  let listItems =document.querySelector("#past-races").getElementsByTagName("li");
  for (let i=0; i<listItems.length; i++){
    if(listItems[i].textContent === "Chicago"){
      list.removeChild(listItems[i]);
    }
  }
}
removeRace();
  // Part 6
function addRace(){
  let list= document.querySelector("#past-races") ;
  let newEl= document.createElement("li");
  newEl.textContent= "Denver";
  list.appendChild(newEl);
}
addRace();
  // Part 7
function newBlog(){
  let mainDiv= document.querySelector(".main")
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class","purple blog-post");
  let newH1= document.createElement("h1");
  newH1.textContent="Denver";
  let newP=document.createElement("p");
  newP.textContent="I drove my car around a mountain in 60 seconds";
  newDiv.appendChild(newH1);
  newDiv.appendChild(newP);
  mainDiv.appendChild(newDiv);
}
newBlog();
  // Part 8
function clickQuote(){
  let quoteButton=document.querySelector("#quote-title");
  quoteButton.addEventListener("click",function(){
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  })
}
clickQuote();

  // Part 9
function toggleColor(){
let list=document.getElementsByClassName("blog-post");
for(let i=0; i<list.length; i++){
list[i].addEventListener("mouseout",function(){
list[i].classList.toggle("purple");
})
list[i].addEventListener("mouseenter",function(){
list[i].classList.toggle("red");
})
}
}
toggleColor();
});
