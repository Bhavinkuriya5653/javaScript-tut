// Array

const tableContainer = [1, 2, 3, 4, 5];

const g20Team = ["America", "india", "Australia", "Africa"];

const g20Number = new Array(1, 2, 3, 4);

//  Array Methods

tableContainer.push(7);
tableContainer.pop();
tableContainer.unshift(0);
tableContainer.shift();
console.log(tableContainer);

// slice and splice

const numbers = [1, 2, 3, 4];
console.log("--> first", numbers);
console.log("with slice", numbers.slice(1, 3));

console.log("with splice", numbers.splice(1, 3));
