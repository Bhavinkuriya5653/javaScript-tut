const chatGptUserCount = new Number(1000);

console.log(chatGptUserCount);
console.log(chatGptUserCount.toString().length);
console.log(chatGptUserCount.toFixed(2));

const premiumUserCount = 11189.9111;
console.log(premiumUserCount.toPrecision(1));

console.log(chatGptUserCount.toLocaleString());

//   ===========================Maths====================================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.sqrt(8));
console.log(Math.min(8, 6, 7, 10));
console.log(Math.random()); // 0 or 1

const mini = 10;
const max = 30;

console.log(Math.floor(Math.random() * (max - mini + 1)) + mini);
