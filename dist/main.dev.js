"use strict";

mybutton = document.getElementById("up");

window.onscroll = function () {
  if (pageYOffset >= 1000) {
    mybutton.style.display = "block";
    console.log("lll");
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.onclick = function () {
  scroll(0, 0);
}; //random class


myclass = document.querySelector(".container h3");
classrandom = ["red", "blue", "yellow", "orange"];
keyrandom = Math.floor(Math.random() * classrandom.length);
myclass.setAttribute("class", classrandom[keyrandom]);
console.log(classrandom[keyrandom]); //LOCAL STORAGE

var myform = document.querySelector('#myform');
var myul = document.querySelector('.mydiv ul');
var input = document.querySelector('#item');
var mybuttonmy = document.querySelector("#mybutton");
mystorage = [];

if (localStorage.getItem("value")) {
  mystorage = JSON.parse(localStorage.getItem("value"));
} else {
  mystorage = [];
}

function addli(text) {
  var lielement = document.createElement("li");
  lielement.textContent = text;
  myul.appendChild(lielement);
}

addEventListener("submit", function (e) {
  e.preventDefault();
  addli(input.value);
  myinput = input.value;
  mystorage.push(myinput);
  console.log(mystorage);
  localStorage.setItem("value", JSON.stringify(myinput));
});