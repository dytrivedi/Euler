// Problem 23
// ==========
// 
// A perfect number is a number for which the sum of its proper divisors is
// exactly equal to the number. For example, the sum of the proper divisors
// of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect
// number.
// 
// A number whose proper divisors are less than the number is called
// deficient and a number whose proper divisors exceed the number is called
// abundant.
// 
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the
// smallest number that can be written as the sum of two abundant numbers is
// 24. By mathematical analysis, it can be shown that all integers greater
// than 28123 can be written as the sum of two abundant numbers. However,
// this upper limit cannot be reduced any further by analysis even though it
// is known that the greatest number that cannot be expressed as the sum of
// two abundant numbers is less than this limit.
// 
// Find the sum of all the positive integers which cannot be written as the
// sum of two abundant numbers.

function sumOf(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function divisorsOf(n) {
    var divisors = [];
    for (var i = 1; i < n; i++) {
        if (n % i === 0) divisors.push(i);
    }
    return divisors;
}

var abundantNumbers = [],
    sumsOfAbundants = {},
    limit           = 28123,
    result          = 0;
for (var i = 12; i <= limit; i++) {
    if (sumOf(divisorsOf(i)) > i) {
        abundantNumbers.push(i);
    }
}

for (i = 0; i < abundantNumbers.length; i++) {
    for (var j = i; j < abundantNumbers.length; j++) {
        var sum = abundantNumbers[i] + abundantNumbers[j];
        if (sum <= limit) {
            sumsOfAbundants[sum] = sum;
        } else {
            break;
        }
    }
}

for (i = 1; i <= limit; i++) {
    if (!sumsOfAbundants[i]) {
        result += i;
    }
}

// TODO: return your answer for this prompt.
return result;
