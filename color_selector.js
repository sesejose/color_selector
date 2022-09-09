"use strict";

// Done !!!

//Global Variavle to be defined.
let inputColor;

//When load initiate !
document.addEventListener("DOMContentLoaded", init);

function init() {
  //When initiate call the function to define the input value.
  document.querySelector("input").addEventListener("input", defineInput);
}

//Define Input Value (Color)
function defineInput() {
  inputColor = document.querySelector("input").value; //Getting the color from the input.
  hexToRgb(inputColor);
}

// 1 . Function to Convert that value /HEX) to RGB.
//Here we define r, g, and b variables that would be used later in the function rgbToHsl
function hexToRgb(hexNr) {
  //Clean the string
  const number = hexNr.substring("1");
  console.log(number);

  // Divide HEX in three pars of numbers/letters
  const ab = number.substring(0, 2);
  const cd = number.substring(2, 4);
  const ef = number.substring(4, 6);
  console.log(ab, cd, ef);

  //Use those 3 values and convert them to 3 numbers for the RGB with parseInt

  const r = parseInt(ab, 16);
  console.log(r);

  const g = parseInt(cd, 16);
  console.log(g);

  const b = parseInt(ef, 16);
  console.log(b);

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = inputColor;
  console.log(rgb);
  console.log(hex);

  //Callback display RGB amd HEX
  displayRgb(r, g, b);
  displayHex(hex);

  //Now that I have the r, g, b variables/values --> Callback the function that convert them to HSL
  rgbToHsl(r, g, b);
}

// 2 . Function to Convert the second value (RGB) to HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  displayHsl(h, s, l);
}

// 3 . Function to display those values in the DOM.
function displayRgb(one, two, three) {
  //the param one, two, three are references to r, g, b variables that the callbak function uses.
  document.querySelector(".r").textContent = one;
  document.querySelector(".g").textContent = two;
  document.querySelector(".b").textContent = three;
}

function displayHex(value) {
  document.querySelector(".hex").textContent = value;
}

function displayHsl(vh, vs, vl) {
  document.querySelector(".h").textContent = vh;
  document.querySelector(".s").textContent = vs;
  document.querySelector(".l").textContent = vl;
}
