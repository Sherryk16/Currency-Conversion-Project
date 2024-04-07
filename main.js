import inquirer from "inquirer";
//currency conversion object
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "INR": 0.30,
        "AED": 0.013,
        "EUR": 0.0033,
    },
    "USD": {
        "PKR": 277.70,
        "INR": 83.29,
        "AED": 3.67,
        "EUR": 0.92,
    },
    "INR": {
        "PKR": 3.34,
        "USD": 0.0012,
        "AED": 0.044,
        "EUR": 0.0011,
    },
    "AED": {
        "PKR": 75.60,
        "USD": 0.27,
        "INR": 22.68,
        "EUR": 0.25,
    },
    "EUR": {
        "PKR": 300.89,
        "USD": 1.08,
        "INR": 90.25,
        "AED": 3.98,
    },
};
//promt user for input
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "From",
        choices: ["PKR", "USD", "INR", "AED", "EUR"],
    },
    {
        type: "list",
        name: "to",
        message: "To",
        choices: ["PKR", "USD", "INR", "AED", "EUR"],
    },
    {
        type: "number",
        name: "amount",
        message: "Amount",
    }
]);
//Destructuring user input
const { from, to, amount } = answer;
//perform currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`Your Conversion From ${from} to ${to} is ${result}`);
}
else {
    console.log("Please enter valid input");
}
