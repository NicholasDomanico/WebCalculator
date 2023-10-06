const numberKeys = document.querySelectorAll(".Button.Number");
const displayText = document.getElementById("Text");

const add = document.getElementById("Add");
const subtract = document.getElementById("Subtract");
const multiply = document.getElementById("Multiply");
const divide = document.getElementById("Divide");

const equal = document.getElementById("Equal");

let currentNumber = "";
let opA = 0;
let opB = 0;
let operation = "";

//Creates array of number keys and adds event listener to each
let numbersArray = [...numberKeys];
for(let i = 0; i < numbersArray.length; i++) {
    numbersArray[i].addEventListener("click", function() {
        currentNumber = currentNumber + numbersArray[i].id;
        display(currentNumber);
    })
}

add.addEventListener("click", function() {
    if(operation.length === 0){
        opA = Number(currentNumber);
        currentNumber = "";
        operation = "+";
    }

    else if(operation.length === 1){
        opB = doMath(opA, Number(currentNumber), operation);
        display(String(opB));
        currentNumber = "";
        operation = "+"
        opA = opB;
    }
})

subtract.addEventListener("click", function() {
    if(operation.length === 0){
        opA = Number(currentNumber);
        currentNumber = "";
        operation = "-";
    }

    else if(operation.length === 1){
        opB = doMath(opA, Number(currentNumber), operation);
        display(String(opB));
        currentNumber = "";
        operation = "-"
        opA = opB;
    }
})

multiply.addEventListener("click", function() {
    if(operation.length === 0){
        opA = Number(currentNumber);
        currentNumber = "";
        operation = "x";
    }

    else if(operation.length === 1){
        opB = doMath(opA, Number(currentNumber), operation);
        display(String(opB));
        currentNumber = "";
        operation = "x"
        opA = opB;
    }
})

divide.addEventListener("click", function() {
    if(operation.length === 0){
        opA = Number(currentNumber);
        currentNumber = "";
        operation = "/";
    }

    else if(operation.length === 1){
        opB = doMath(opA, Number(currentNumber), operation);
        display(String(opB));
        currentNumber = "";
        operation = "/"
        opA = opB;
    }
})

equal.addEventListener("click", function() {
    opB = doMath(opA, Number(currentNumber), operation);
    display(String(opB));
    currentNumber = opB;
    operation = ""
})

function doMath(operandA, operandB, operation) {
    if (operation === "") {
        return null;
    }

    if (operation === "+") {
        return operandA + operandB;
    }

    if (operation === "-") {
        return operandA - operandB;
    }

    if (operation === "x") {
        return operandA * operandB;
    }

    if (operation === "/") {
        return operandA / operandB;
    }
}

function display(number) {
    displayText.innerHTML = `${number}`;
}