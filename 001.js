// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

// const multiplesOf3And5 = number => {
//   let sum = 0;

//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
const multiplesOf3And5 = number => {
  return Array(number)
    .fill(0)
    .map((value, index) => index + 1)
    .filter(value => value % 3 === 0 || value % 5 === 0)
    .reduce((sum, num) => sum + num);
};
console.log(multiplesOf3And5(1000));
// output = 233168
