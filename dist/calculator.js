#! /usr/bin/env node
import inquirer from "inquirer";
import Banner from "node-banner";
import { subtract, sum, product, divison, square, logarithm, exponent } from "./functions.js";
import gradient from 'gradient-string';
let operations = [
    {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division", "square root", "logarithm", "Power"],
        message: gradient.rainbow("Enter your operation:"),
    },
];
let expo = [
    {
        name: "Base",
        type: "number",
        message: gradient.rainbow("Enter base"),
        validate(base) {
            if (isNaN(base)) {
                return "please Enter number";
            }
            return true;
        }
    },
    {
        name: "Power",
        type: "number",
        message: gradient.rainbow("Enter Power"),
        validate(power) {
            if (isNaN(power)) {
                return "please Enter number";
            }
            return true;
        }
    }
];
let op = [
    {
        name: "num",
        type: "number",
        messsage: gradient.rainbow("Enter number"),
        validate(num) {
            if (isNaN(num)) {
                return "Please enter number";
            }
            return true;
        }
    }
];
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter First Number"),
        validate: (inp) => {
            if (isNaN(inp)) {
                return "Please Enter number";
            }
            return true;
        }
    },
    {
        name: "num2",
        type: "number",
        message: gradient.rainbow("Enter Second number"),
        validate: (inp) => {
            if (isNaN(inp)) {
                return "Please Enter number";
            }
            return true;
        }
    },
];
(async () => {
    await Banner('Calculator', 'This calculator can perform addition, Subtraction , multiplication and division ', 'red', 'blue');
})();
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want to continue your calculation:"
    }
];
async function calculator() {
    let condition = true;
    while (condition) {
        let { operation } = await inquirer.prompt(operations);
        if (operation == "square root" || operation == "logarithm") {
            let { num } = await inquirer.prompt(op);
            if (operation == "square root") {
                console.log("Square root of given number is", square(num));
            }
            else {
                console.log("Logarithm of given number with base e is", logarithm(num));
            }
        }
        else if (operation == "Power") {
            let { Power, Base } = await inquirer.prompt(expo);
            console.log(exponent(Power, Base));
        }
        else {
            let { num1, num2 } = await inquirer.prompt(answers);
            if (operation == "addition") {
                console.log("addition", sum(num1, num2));
            }
            else if (operation == "subtraction") {
                console.log("subtraction", subtract(num1, num2));
            }
            else if (operation == "multiplication") {
                console.log("multiplication", product(num1, num2));
            }
            else if (operation == "division") {
                console.log("division", divison(num1, num2));
            }
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(function () {
    calculator();
}, 1000);
