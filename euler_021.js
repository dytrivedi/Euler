// Problem 21
// ==========
// 
// Let d(n) be defined as the sum of proper divisors of n (numbers less than
// n which divide evenly into n).
// If d(a) = b and d(b) = a, where a =/= b, then a and b are an amicable pair
// and each of a and b are called amicable numbers.
// 
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22,
// 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1,
// 2, 4, 71 and 142; so d(284) = 220.
// 
// Evaluate the sum of all the amicable numbers under 10000.

function divisorsOf(n) {
    var divisors = [];
    for (var i = 1; i < n; i++) {
        if (n % i === 0) divisors.push(i);
    }
    return divisors;
}

function sumOf(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function amicablePairOf(n) {
    var pair = [];
    var a = sumOf(divisorsOf(n));
    var b = sumOf(divisorsOf(a));
    if (n === b && a !== b) {
        pair = pair.concat([a, b]);
    }
    return pair;
}

var amicableNumbers = [];

for (var i = 1; i <= 10000; i++) {
    if (amicableNumbers.indexOf(i) === -1) {
        amicableNumbers = amicableNumbers.concat(amicablePairOf(i));
    }
}

// TODO: return your answer for this prompt.
return sumOf(amicableNumbers);
