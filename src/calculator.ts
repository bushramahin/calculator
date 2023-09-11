import inquirer from "inquirer";
import chalk from "chalk";
import Banner from "node-banner";
import {sum} from "./functions.js";
let answers = [
    {
        name : "num1",
        type : "number",
        message : "Enter First Number"
    },
    {
        name : "num2",
        type : "number",
        message : "Enter Second number"
    },
    {
        name : "operation",
        type : "list",
        choices : ["addition" , "subtraction" , "multiplication" , "division"]
    }
]
let {num1 , num2 , operation} = await inquirer.prompt(answers);

async function calculator(){
    (async ()=>{
        await Banner('Calculator' , 'This calculator can perform addition, Subtraction , multiplication and division ','red' ,'blue')
    })();
    if(operation == "addition"){
        console.log("addition" , sum(num1 , num2));
    }
    else if (operation == "subtraction"){
        let sub = num1 - num2;
        console.log("subtraction" , chalk.bgCyan(sub));
    }
    else if(operation == "multiplication"){
        let product = num1*num2;
        console.log("multiplication" , chalk.bgGreen(product));
    }
    else{
        let div = num1/num2;
        console.log("division" , chalk.bgCyan(div));
        
    }
}
setTimeout(function(){
    calculator()
},1000)