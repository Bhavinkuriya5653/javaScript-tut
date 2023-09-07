let matchScore = 24;
let matchScoreInString = "55";
console.log(typeof matchScore);
console.log(typeof matchScore);

let finalScore = Number(matchScoreInString);

console.log("let's check type of match score", typeof finalScore);
console.log("see what's happen", finalScore);

// let's do another investigation

let iplScore = "23abc";
let convertIntoNumber = Number(iplScore);

console.log("iplScore type", typeof convertIntoNumber); // number
console.log(convertIntoNumber); // return value NaN

let temperatureLevel = null;

console.log("let's check temperature ", typeof temperatureLevel); // type
console.log("let's check temperature value ", temperatureLevel); // value

let indPak = undefined;

console.log("ind Pak", typeof indPak); // type
console.log("indPak value", indPak); // value

let isRegister = 1;
let booleanIsRegister = Boolean(isRegister);
console.log(booleanIsRegister);

// NOTES

// "69" => 69
// "89abc" => NaN
// true => 1 ; false => 0
