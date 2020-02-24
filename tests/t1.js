var words = require("../index.js")("en");
// import {
//     words as checkIfWord
// } from "../index";
// console.log(checkIfWord);
// var words = checkIfWord.words("en");

var wrds = ["ajsk", "no", "object", "opal", "perl", "perlpali"];
wrds.forEach(v => console.log(v, words.check(v)));
console.log(wrds, words.getValidWords(wrds));