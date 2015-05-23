// Problem 15
// ==========
// 
// Starting in the top left corner of a 2 * 2 grid, there are 6 routes
// (without backtracking) to the bottom right corner.
// 
// How many routes are there through a 20 * 20 grid?

function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}

function central_binomial_coef(n) {
    return (factorial(2 * n) / Math.pow(factorial(n), 2));
}

// TODO: return your answer for this prompt.
return central_binomial_coef(20);
