//calculator program

const display = document.querySelector("input");
const backspaceButton = document.querySelector("#backspaceButton");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}

function backspaceFunction() {
  let currentValue = display.value;
  display.value = currentValue.substring(0, currentValue.length - 1);
}
