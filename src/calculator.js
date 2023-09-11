import inquirer from "inquirer";
import chalk from "chalk";
let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Second number"
    },
    {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
if (operation == "addition") {
    let add = num1 + num2;
    console.log("addition", chalk.bgBlueBright(add));
}
else if (operation == "subtraction") {
    let sub = num1 - num2;
    console.log("subtraction", chalk.bgCyan(sub));
}
else if (operation == "multiplication") {
    let product = num1 * num2;
    console.log("multiplication", chalk.bgGreen(product));
}
else {
    let div = num1 / num2;
    console.log("division", chalk.bgCyan(div));
}
