const seriesName = ["breakingBad", "bloodMoney", "Govinda"];
const movieName = ["herry", "robbery", "planet"];

seriesName.push(movieName);

console.log(seriesName);
console.log(seriesName[3], [1]);

const allData = seriesName.concat(movieName);

console.log(allData);

// with simple solution spread Operator

const all_New_Movies = [...movieName, ...seriesName];

// complex array solution

const first_Array = [1, 2, (3)[(4, 5, 6)]];

const solution = first_Array.flat(Infinity);

console.log(solution);
