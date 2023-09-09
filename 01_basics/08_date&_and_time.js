// Dates

let matchDate = new Date();

console.log(matchDate);
console.log(matchDate.toString());
console.log(matchDate.toDateString());
console.log(matchDate.toLocaleString());
console.log(typeof matchDate);

let nextMatchDate = new Date(2023, 1, 23); // month starting with zero value like 0 is ==> January
console.log(nextMatchDate.toString());
let nextMonthMatchDate = new Date(2023, 1, 23, 5, 3);
console.log(nextMonthMatchDate.toLocaleString());

let iplMatchDate = new Date("2023-01-06");
console.log(iplMatchDate.toLocaleString());

console.log(matchDate.getTime());

matchDate.toLocaleString("default", {
  weekday: "long",
});
