// Problem 20
// ==========
// 
// n! means n * (n - 1) * ... * 3 * 2 * 1
// 
// Find the sum of the digits in the number 100!



// TODO: return your answer for this prompt.
function multiplyNByM(n, m) {
    var arr = n.split('');
    var carry = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        var result = parseInt(arr[i], 10);
        result = (result * m) + carry;
        carry = parseInt(result / 10, 10);
        result = result % 10;
        arr[i] = result;
    }
    if (carry > 0) {
        arr.unshift(carry);
    }
    return arr.join('');
}

function factBigNum(n) {
    var result = '1';
    for (var i = 1; i <= n; i++) {
        result = multiplyNByM(result, i);
    }
    return result;
}

var factorialOf100 = factBigNum(100);
var sum = 0;

for (var i = 0; i < factorialOf100.length; i++) {
    sum = sum + parseInt(factorialOf100.charAt(i), 10);
}

return sum;