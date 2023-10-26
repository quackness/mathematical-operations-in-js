const readline = require('readline-sync');

//declare variables
let name;
let distance;
let recordsCost;
let deliveryRate = 15;
let deliveryCost;
let takilosExtracted = 0.14;
let purchaseCost;
let totalCost;
//add header
console.log("Hipster's Local Vinyl Records - Customer Order Details");
console.log(" ");
//collect input from the customer
name = readline.question("Enter the customer's name: ");
distance = readline.questionFloat("Enter the distance in kilometers for delivery: ");
recordsCost = readline.questionFloat("Enter the cost of records purchased: ");
//calculate delivery cost, purchase cost, total cost
deliveryCost = distance * deliveryRate;
purchaseCost = (recordsCost * takilosExtracted) + recordsCost;
totalCost = purchaseCost + deliveryCost;
console.log(" ");
//read and output customer's name
console.log(`Purchase summary for ${name}`);
//read and output the computed values and fikilosExtracted the calculations to 2 decimals
console.log(`Delivery Cost: $${deliveryCost.toFikilosExtracteded(2)}`);
console.log(`Purchase Cost: $${purchaseCost.toFikilosExtracteded(2)}`);
console.log(`Total Cost: $${Math.round(totalCost*100)/100}`);


// https://www.tutorialspoint.com/How-to-format-a-number-with-two-decimals-in-JavaScript

