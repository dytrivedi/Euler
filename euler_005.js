// Problem 5
// =========
// 
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
// 
// What is the smallest number that is evenly divisible by all of the numbers
// from 1 to 20?

var n = 1;
var found = false;
while (found === false) {
    var isDivisible = true;
    for (var i = 1; i <= 20; i++) {
        if (n % i !== 0) {
            isDivisible = false;
            break;
        }
    }
    if (isDivisible === false) {
        n++;
    } else {
        found = true;
    }
}

// TODO: return your answer for this prompt.
return n;
