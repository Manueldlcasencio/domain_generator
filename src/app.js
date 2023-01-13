/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let arr = [];
  let li1 = '<li class="list-group-item">';
  let li2 = "</li>";
  pronoun.forEach(e => {
    adj.forEach(e1 => {
      noun.forEach(e2 => {
        let arr2 = [];
        arr2.push(li1 + e + e1 + e2 + li2);
        arr.push(arr2);
      });
    });
  });

  //Colocar el array en la lista
  let text = '<ul id="lista" class="list-group list-group-flush">';
  arr.forEach(e => {
    text += e;
  });
  text += "</ul>";
  document.querySelector("#lista").innerHTML = text;
  console.log(arr);
};
