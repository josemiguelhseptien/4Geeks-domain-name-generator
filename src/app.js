/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let output = [];

  for (let value1 of pronoun) {
    for (let value2 of adj) {
      for (let value3 of noun) {
        console.log(value1.concat(value2.concat(value3)));
      }
    }
  }
};
