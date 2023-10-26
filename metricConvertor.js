//import readline sync
const readline = require('readline-sync');
//declare vars
let numberOfTones;
let numberOfStones;
let numberOfpounds;
let numberOfounces;

//add header
console.log("Imperial to Metric Conversion");
console.log(" ");
//collect output
numberOfTones = readline.questionFloat("Enter the number of tones: ");
numberOfStones = readline.questionFloat("Enter the number of stones: ");
numberOfpounds = readline.questionFloat("Enter the number of pounds: ");
numberOfounces = readline.questionFloat("Enter the number ofounces: ");

//convert to ounces
let ounces = 35840 * numberOfTones + 224 * numberOfStones + 16 * numberOfpounds + numberOfounces;
//convert to kilos
let kilos = ounces / 35.274;
//calculate the metric tons
let metricTons = kilos/1000;
//turn metric tons into an integer
let metricTonsInteger = parseInt(kilos/1000);
//extract kilos
let kilosExtracted = parseInt((metricTons - metricTonsInteger)*1000);
//extract grams and clip to one decimal
let gramsExtracted = (((metricTons - metricTonsInteger)*1000 - kilosExtracted)*1000).toFixed(1);


console.log(`The metric weight is ${metricTonsInteger} metric tons, ${kilosExtracted} kilos, ${gramsExtracted} grams.`);

//output values that properly formatted
