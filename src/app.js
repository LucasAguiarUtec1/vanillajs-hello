/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoSelected, actionSelected, whatSelected, whenSelected;

  whoSelected = who[Math.floor(Math.random() * who.length)];

  actionSelected = action[Math.floor(Math.random() * action.length)];

  whatSelected = what[Math.floor(Math.random * what.length)];

  whenSelected = when[Math.floor(Math.random() * when.length)];

  let element = document.querySelector("#excuse");
  element.innerHTML =
    whoSelected +
    " " +
    actionSelected +
    " " +
    whatSelected +
    " " +
    whenSelected;

  console.log("selected: " + whoSelected);

  console.log("Hello Rigo from the console!");
};
