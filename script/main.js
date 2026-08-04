"use strict";

// Contant Variables
const numberClickHTML = document.getElementById("number");
const buttonClick = document.getElementById("click-btn");
const buttonReset = document.getElementById("reset-btn");
const buttonLight = document.getElementById("light-btn");
const buttonDark = document.getElementById("dark-btn");
const AleredyThemeDark = document.getElementById("dark-varriation");
const AleredyThemeLight = document.getElementById("light-varriation");
const header = document.getElementById("head-theme");
const h1 = document.getElementById("headline"); 

// Changeable Variables
let numberClickJS = 0;
let DarkTheme = false;
let LightTheme = true;

// Function click
buttonClick.addEventListener('click', () => {
  numberClickJS++;

  numberClickHTML.textContent = numberClickJS;

  if (numberClickJS === 10) {
    alert("Very Good!");
  }
});

// Function reset
buttonReset.addEventListener('click', () => {
  if (numberClickJS === 0) {
    console.error("Oh no! Number already equals 0.");
    alert("Number already equals 0.")
  } else {
    numberClickJS = 0;
    
    numberClickHTML.textContent = numberClickJS;

    alert("Reset Complete!");
    console.log("Reset.");
  }
});

// Function Dark Teme
buttonDark.addEventListener('click', () => {
  if (DarkTheme === true) {
    alert("The topic is aleredy Dark");
    console.error("Oh no! Theme aleredy Dark");
  } else {
    DarkTheme = true;
    LightTheme = false;

    AleredyThemeLight.textContent = "";
    AleredyThemeDark.textContent = "*";

    document.body.style.backgroundColor = "#101010";
    header.style.backgroundColor = "#222222";
    h1.style.color = "#f1f1f1";
  }
});

// Function Light Theme
buttonLight.addEventListener('click', () => {
  if (LightTheme === true) {
    alert("The topic is aleredy Light");
    console.error("Oh no! Theme aleredy Light");
  } else {
    DarkTheme = false;
    LightTheme = true;

    AleredyThemeLight.textContent = "*";
    AleredyThemeDark.textContent = "";

    document.body.style.backgroundColor = "#ffffff";
    header.style.backgroundColor = "#000000";
    h1.style.color = "#ffffff";
  }
});
