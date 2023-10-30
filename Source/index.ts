#! /usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import chalk from "chalk";
import gradient from "gradient-string";
import { sum, subtract, multiply, division } from "./operation.js";


(async () => {
    await showBanner('CALCULATOR', 'This calculator perfoms all opertions: Addition, Subtraction, Multiplication, Division', 'red', 'yellow',);

                                   console.log(" ");
                               
    
  

    const input = await inquirer.prompt([

      {
        type: "number",
        name: "num1",
        message: gradient('red','yellow','red')("Enter first number"),
        
      },
      {
        type: "number",
        name: "num2",
        message: gradient('yellow','red','yellow')("Enter Second number"),
        
      },
      {
        type: "list",
        name: "operation",
        message:  gradient('red','yellow','red')("Select your operation"),
        choices: ["+",  "-" , "*", "/" ],
      },
    ]);
                               console.log(" ");
                             

    if (input.operation === "+") {
      const result = sum(input.num1, input.num2);
      console.log(chalk.bgRed.yellowBright(`result:${result}`));
    } else if (input.operation === "-") {
      const result = subtract(input.num1, input.num2);
      console.log(chalk.bgRed.yellowBright(`result:${result}`));
    } else if (input.operation === "*") {
      const result = multiply(input.num1, input.num2);
      console.log(chalk.bgRed.yellowBright(`result:${result}`));
    } else if (input.operation === "/") {
      const result = division(input.num1, input.num2);
      console.log(chalk.bgRed.yellowBright(`result:${result}`));
    } else {
      console.log("Invalid operation");
    }
 
  })();

 
