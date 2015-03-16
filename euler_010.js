// Problem 10
// ==========
// 
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// 
// Find the sum of all the primes below two million.



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
var sum = 2;
for (var i = 3; i < 2000000; i+=2) {
    sum = sum + (isPrime(i) ? i : 0);
}

return sum;
