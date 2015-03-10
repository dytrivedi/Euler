// Problem 7
// =========
// 
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
// 
// What is the 10001st prime number?



// TODO: return your answer for this prompt.
function isPrime(n) {
    var isNPrime = true;
    var sqrtOfN = Math.sqrt(n);
    for (var i = 2; i <= sqrtOfN; i++) {
        if (n % i === 0) {
            isNPrime = false;
            break;
        }
    }
    return isNPrime;
}
var c = 0;
var n = 1;
while (c != 10001) {
    n++;
    if (isPrime(n)) {
        c++;
    }
}
return n /* solution */;
