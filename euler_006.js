// Problem 6
// =========
// 
// The sum of the squares of the first ten natural numbers is,
//                        1^2 + 2^2 + ... + 10^2 = 385
// 
// The square of the sum of the first ten natural numbers is,
//                     (1 + 2 + ... + 10)^2 = 55^2 = 3025
// 
// Hence the difference between the sum of the squares of the first ten
// natural numbers and the square of the sum is 3025 - 385 = 2640.
// 
// Find the difference between the sum of the squares of the first one
// hundred natural numbers and the square of the sum.



// TODO: return your answer for this prompt.
var sumOfSquares = 0;
var sum = 0;
var squareOfSum;
for (var n = 1; n <= 100; n++) {
    sumOfSquares = sumOfSquares + (n * n);
    sum = sum + n;
}
squareOfSum = sum * sum;
var result = squareOfSum - sumOfSquares;
return result;
