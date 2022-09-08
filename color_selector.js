"use strict";

//Color input Value
const inputColor = document.querySelector("input").value; //Getting the color from the input.

console.log(inputColor);

// 1 . Function to Convert that value that is HEX to RGB

hexToRGB(inputColor);
function hexToRGB(hexNr) {
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

  displayRgb(r, g, b);
  displayHex(hex);

  rgbToColor(r, g, b);
}

// 2 . Function to Convert the second value that is RGB to HSL

function rgbToColor(r, g, b) {
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

// 3 . Function to display those values.

function displayRgb(one, two, three) {
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
