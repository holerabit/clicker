"use strict";

// Contant Variables
const NumberClickHTML = document.getElementById("NumberInput");
const ButtonClick = document.getElementById("ClickBtn");
const ButtonReset = document.getElementById("ResetBtn");
const ButtonLight = document.getElementById("LightBtn");
const ButtonDark = document.getElementById("DarkBtn");
const UpgradeBtn = document.getElementById("UpgradeBtnFirst");
const AleredyThemeDark = document.getElementById("DarkVarriation");
const AleredyThemeLight = document.getElementById("LightVarriation");
const headerJS = document.getElementById("HeadTheme");
const h1JS = document.getElementById("HeadLine"); 


// Changeable Variables
let NumberClickJS = 0;
let Upgrade20 = false;
let DarkTheme = false;
let SetTheme = localStorage.getItem("theme") === "true";
let Upgrade20Set = localStorage.getItem("FirstUpgrade") === "true";
let CLicksSet = localStorage.getItem("Clicks");
let End;

Upgrade20 = Upgrade20Set;

NumberClickJS = CLicksSet;
NumberClickHTML.textContent = NumberClickJS;

//Checking
if (SetTheme === true){
  AleredyThemeLight.textContent = "";
  AleredyThemeDark.textContent = "*";

  document.body.style.backgroundColor = "#101010";    
  headerJS.style.backgroundColor = "#222222";
  h1JS.style.color = "#f1f1f1";

  DarkTheme = true;
} else {
  AleredyThemeLight.textContent = "*";
  AleredyThemeDark.textContent = "";

  document.body.style.backgroundColor = "#ffffff";
  headerJS.style.backgroundColor = "#000000";
  h1JS.style.color = "#ffffff";

  DarkTheme = false;
};

if (Upgrade20 === true){
  UpgradeBtn.classList.add("Sell");
}

// Function click
ButtonClick.addEventListener('click', () => {
  if (Upgrade20 === true){
    let NumberAbsolute = Number(NumberClickJS); 
    NumberAbsolute += 2;

    NumberClickJS = NumberAbsolute;

    NumberClickHTML.textContent = NumberClickJS;

    localStorage.setItem("Clicks", NumberClickJS);
  } else {
    NumberClickJS++;

    NumberClickHTML.textContent = NumberClickJS;

    localStorage.setItem("Clicks", NumberClickJS);
  }
  

  if (NumberClickJS === 10) {
    alert("Very Good!");
  };

  if (NumberClickJS === 20) {
    alert("You can buy an Upgrade");
    console.info("::: You can buy an Upgrade :::");
  }

  if (NumberClickJS === 50) {
    alert("You very Good!")
  }

  if (NumberClickJS === 100) {
    alert("Congratulations on your hundredth");
  }

  if (NumberClickJS === 500) {
    alert("OMG!");
  }
});

// Function reset
ButtonReset.addEventListener('click', () => {
  if (NumberClickJS === 0) {
    console.error("ERROR :::Oh no! Number already equals 0.:::");
    alert("Number already equals 0.")
  } else {
    NumberClickJS = 0;
    Upgrade20 = false;
    UpgradeBtn.classList.remove("Sell");

    NumberClickHTML.textContent = NumberClickJS;

    localStorage.setItem("Clicks", NumberClickJS);
    localStorage.setItem("FirstUpgrade", Upgrade20);

    alert("Reset Complete!");
    console.info("::: Reset. :::");
  }
});

// Function Dark Teme
ButtonDark.addEventListener('click', () => {
  if (DarkTheme === true) {
    alert("The topic is aleredy Dark");
    console.error("ERROR :::Oh no! Theme aleredy Dark :::");
  } else {
    DarkTheme = true;

    AleredyThemeLight.textContent = "";
    AleredyThemeDark.textContent = "*";

    document.body.style.backgroundColor = "#101010";
    headerJS.style.backgroundColor = "#222222";
    h1JS.style.color = "#f1f1f1";

    localStorage.setItem("theme", true)
  }
});

// Function Light Theme
ButtonLight.addEventListener('click', () => {
  if (DarkTheme === false) {
    alert("The topic is aleredy Light");
    console.error("Oh no! Theme aleredy Light");
  } else {
    DarkTheme = false;

    AleredyThemeLight.textContent = "*";
    AleredyThemeDark.textContent = "";

    document.body.style.backgroundColor = "#ffffff";
    headerJS.style.backgroundColor = "#000000";
    h1JS.style.color = "#ffffff";

    localStorage.setItem("theme", false);
  }
});

UpgradeBtn.addEventListener('click', () => {
  if(NumberClickJS >= 20){
    Upgrade20 = true;
    NumberClickJS -= 20;

    NumberClickHTML.textContent = NumberClickJS;

    UpgradeBtn.classList.add("Sell");

    alert("You Buy Upgrade!");
    console.info("Upgrade Add");

    localStorage.setItem("Clicks", NumberClickJS);
    localStorage.setItem("FirstUpgrade", Upgrade20);
  } else if (Upgrade20 === true) {
    alert("You already have an upgrade.")
    console.error("ERROR ::: You already have an upgrade! :::")
  } else {
    alert("Not enough clicks.");
    console.error("ERROR ::: Not enough clicks! :::")
  }
});
