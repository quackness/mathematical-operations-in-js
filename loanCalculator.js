const readline = require('readline-sync');
//define variables
let rate;
let years;
let loan;
let monthlyPayment;
let i;
let numerator;
let denominator;


console.log('Weekly Loan Calculator');
console.log('');
//ask for input
loan = readline.questionFloat("Enter the amount of the loan: ");
rate = readline.questionFloat("Enter the intrest rate(%): ");
years = readline.questionInt("Enter the number of years: ");

// calculate the i value, which is weekly payment
i = rate/5200;

// calculate the  numerator
numerator = i*loan;
// calculate the  denominator
denominator = (1- Math.pow(1+i,-(52*years)));
//assign to monthly payment var
monthlyPayment =  Math.round((numerator/denominator)*100)/100;

//output the payment
console.log(`Your monthly payment will be: $${monthlyPayment}`);



