const userName = "vivan";
const useNumbers = 50;

// console.log(userName + useNumbers + "Value");

// console.log(`hello my name is ${userName} and my user count is ${useNumbers}`);

const mobileName = new String("i phone 13      ");

// console.log(mobileName);

const url = "https://javascript.com/script%10easy";

// string methods

console.log(mobileName[2]);
console.log(mobileName.__proto__);
console.log(mobileName.length);
console.log(mobileName.toUpperCase());
console.log(mobileName.charAt(3));
console.log(mobileName.indexOf("1"));
console.log(mobileName.concat(" 2023"));
console.log(mobileName.substring(1, 7));
console.log(mobileName.slice(0));
console.log(mobileName.trim());
console.log(url.replace("%10", "-"));
console.log(url.includes("austin"));
