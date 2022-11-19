//jshint esversion:6
const fs = require("fs");
console.log("Text within hello.txt:");
console.log(fs.readFileSync("hello.txt", "utf-8"));

fs.copyFileSync("hello.txt","world.txt");
console.log("Text within world.txt:");
console.log(fs.readFileSync("world.txt", "utf-8"));
