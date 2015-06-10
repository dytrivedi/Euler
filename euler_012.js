// Problem 12
// ==========
// 
// The sequence of triangle numbers is generated by adding the natural
// numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 =
// 28. The first ten terms would be:
// 
//                  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// 
// Let us list the factors of the first seven triangle numbers:
// 
//    1: 1
//    3: 1,3
//    6: 1,2,3,6
//   10: 1,2,5,10
//   15: 1,3,5,15
//   21: 1,3,7,21
//   28: 1,2,4,7,14,28
// 
// We can see that 28 is the first triangle number to have over five
// divisors.
// 
// What is the value of the first triangle number to have over five hundred
// divisors?



// TODO: return your answer for this prompt.
var maxDivisor = 1;
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
var noOfDivisors = function(n) {
    var c = 1;
    var primeHash = {};
    while (n !== 1) {
        for (var i = 2; i <= n; i++) {
            if (isPrime(i)) {
                if (n % i === 0) {
                    primeHash[i.toString()] = primeHash[i.toString()] ? primeHash[i.toString()] + 1 : 1;
                    n = n / i;
                    break;
                }
            }
        }
    }
    for (var k in primeHash) {
        c = c * (primeHash[k] + 1);
    }
    return c;
};
var n = 1;
var t = [1];
while(noOfDivisors(t[t.length - 1]) <= 500) {
    n++;
    t.push(t[n - 2] + n);
}
return t[t.length - 1];