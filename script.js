const numberKeys = document.querySelectorAll(".Button.Number");
const displayText = document.getElementById("Text");

const add = document.getElementById("Add");
const subtract = document.getElementById("Subtract");
const multiply = document.getElementById("Multiply");
const divide = document.getElementById("Divide");

let currentSum = 0;
let operand = 0;
let operator = "";

//Creates array of number keys and adds event listener to each
let numbersArray = [...numberKeys];
for(let i = 0; i < numbersArray.length; i++) {
    numbersArray[i].addEventListener("click", function() {
        currentSum = currentSum + numbersArray[i].id;
        display(Number(currentSum));
    })
}

add.addEventListener("click", function() {
    operator = "+";
    currentSum = Number(currentSum) += Number(operand);
})

subtract.addEventListener("click", function() {
    operator = "-";1
    currentSum = currentSum -= Number(operand);
})



function display(number) {
    displayText.innerHTML = `${number}`;
}