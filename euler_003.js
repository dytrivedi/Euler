// Problem 3
// =========
// 
// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143?



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
var n = 600851475143;
var largestFactor = n;
var largestPrimeFactor = n;
var end = parseInt(n / 2, 10);
for (var i = 2; i <= end; i++) {
    if (n % i === 0) {
        largestFactor = n / i;
        console.log(i);
        if (isPrime(largestFactor)) {
            largestPrimeFactor = largestFactor;
            break;
        }
    }
}
return largestPrimeFactor;
