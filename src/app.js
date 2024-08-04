/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["My cat", "My dog", "My neighbor", "The gardener"];
  let action = ["shouted", "hit", "attacked", "offended"];
  let what = ["the policeman", "a random guy", "another pet", "a jewish"];
  let when = [
    "during the lunch",
    "this morning",
    "when i was at the gym",
    "before the class",
    "this evening"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  const generator = `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;

  const titleElement = document.querySelector("#excuse");
  titleElement.innerHTML = generator;
  console.log(titleElement);
};
