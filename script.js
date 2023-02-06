"use strict";

// Creates variables
let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
let operator = document.querySelector("#operator").value;
let result;
let decimals = document.querySelector("#decimals").value;
let latestResult;
const calculateButton = document.querySelector("#calculate");
const resultListElement = document.querySelector("#results li");
const resultList = document.querySelector("#results");
const doRound = document.querySelector("#doround");
const clearAll = document.querySelector("#clear");

window.addEventListener("load", () => {
  calculateButton.addEventListener("click", doMath);

  clearAll.addEventListener("click", () => {
    latestResult = resultList.lastChild.innerHTML;
    console.log(latestResult);
    resultList.innerHTML = "";
    resultList.innerHTML = latestResult;
  });
});

function doMath() {
  console.log(operator.value);

  //   opdates the value of the operator variable
  operator = document.querySelector("#operator").value;
  decimals = document.querySelector("#decimals").value;
  console.log(decimals);

  //   this if statement makes sure that we can use all the operators
  if (operator === "add") {
    // here the values from the inputfields are converted from strings to numbers and added toghether
    result = Number(firstNumber.value) + Number(secondNumber.value);
  } else if (operator === "sub") {
    result = Number(firstNumber.value) - Number(secondNumber.value);
  } else if (operator === "mul") {
    result = Number(firstNumber.value) * Number(secondNumber.value);
  } else {
    result = Number(firstNumber.value) / Number(secondNumber.value);
  }

  // checkes if the round to box is ckecked.
  // if the box is checked then round to the number of decimals equal to the value of the decimals variable
  if (doRound.checked) {
    console.log("checkbox is checked");
    result = result.toFixed(decimals);
  }
  //   if its not checked, then just print  in the console
  else {
    console.log("checkbox is not checked");
  }

  //   here the result is put as the new value of the first inpoutfield
  firstNumber.value = result;

  //   The li emelent from the result list is cloned, and then given the value of result ->

  let clone = resultListElement.cloneNode(false);
  clone.textContent = result;
  //   then the copy is put at the end of the list.
  resultList.appendChild(clone);

  // scrolls to the bottom of the result list
  resultList.scrollTop = resultList.scrollHeight;
}
