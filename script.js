const numberKeys = document.querySelectorAll(".Button.Number");
const displayText = document.getElementById("Text");

const add = document.getElementById("Add");
const subtract = document.getElementById("Subtract");
const multiply = document.getElementById("Multiply");
const divide = document.getElementById("Divide");

let text = ""
let currentSum = 0;
let operand = 0;
let operator = "";

//Creates array of number keys and adds event listener to each
let numbersArray = [...numberKeys];
for(let i = 0; i < numbersArray.length; i++) {
    numbersArray[i].addEventListener("click", function() {
        text = text + numbersArray[i].id;
        operand = Number(text);
        display(text);
    })
}

add.addEventListener("click", function() {
    operator = "+";
    currentSum = doMath(currentSum, operand);
    operand = 0;
    text = String(currentSum);
    display(text);
    console.log(operand, operator, currentSum);
    text = "";
})

subtract.addEventListener("click", function() {
    operator = "-";
    currentSum = currentSum -= Number(operand);
})

function doMath(operandA, operandB) {
    if (operator === "") {
        return null;
    }

    if (operator === "+") {
        return operandA + operandB;
    }

    if (operator === "-") {
        return operandA - operandB;
    }

    if (operator === "x") {
        return operandA * operandB;
    }

    if (operator === "/") {
        return operandA / operandB;
    }
}

function display(number) {
    displayText.innerHTML = `${number}`;
}