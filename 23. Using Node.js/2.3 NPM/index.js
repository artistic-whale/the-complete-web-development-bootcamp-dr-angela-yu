// Using ECMAScript in Node (ESM)
import generateName from "sillyname";
import superheroes from "superheroes";

// Using Common JS (CJS)
// var generateName = require('sillyname');
var sillyName = generateName();

var superheroName = superheroes.random();

console.log(`My name is ${sillyName}`);
console.log(`And my super hero name is ${superheroName}`);