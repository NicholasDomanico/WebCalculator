const numberKeys = document.querySelectorAll(".Button.Number");
const displayText = document.getElementById("Text");

const add = document.getElementById("Add");
const subtract = document.getElementById("Subtract");
const multiply = document.getElementById("Multiply");
const divide = document.getElementById("Divide");
const period = document.getElementById(".");

const equal = document.getElementById("Equal");
const clear = document.getElementById("Clear");

let currentNumber = "";
let opA = 0;
let opB = 0;
let operation = "";

//Creates array of number keys and adds event listener to each
let numbersArray = [...numberKeys];
for(let i = 0; i < numbersArray.length; i++) {
    numbersArray[i].addEventListener("click", function() {
        if(currentNumber.length < 10){
            currentNumber = currentNumber + numbersArray[i].id;
            display(currentNumber);
        }

        else{
            return;
        }
    })
}

clear.addEventListener("click", function() {
    currentNumber = "";
    opA = 0;
    opB = 0;
    operation = "";
    display(currentNumber);
})

period.addEventListener("click", function() {
    if(currentNumber.includes(".") === false) {
        currentNumber = currentNumber + ".";
        display(currentNumber);
    }

    else if(currentNumber.includes(".") === true) {
        return;
    }
})

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
    if(number.length > 10){
        exponentialNumber = Number(number).toExponential(4);
        displayText.innerHTML = String(exponentialNumber);
    }

    else{
        displayText.innerHTML = `${number}`;
    }
    
}