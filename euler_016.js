// Problem 16
// ==========
// 
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// 
// What is the sum of the digits of the number 2^1000?

// TODO: return your answer for this prompt.

// Single Digit Multiplier
function multiplyByX(x) {
    return function(n) {
        var arr = n.split('');
        var carry = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            var result = parseInt(arr[i], 10);
            result = (result * x) + carry;
            carry = parseInt(result / 10, 10);
            result = result % 10;
            arr[i] = result;
        }
        if (carry > 0) {
            arr.unshift(carry);
        }
        return arr.join('');
    };
}

var multiplyBy2 = multiplyByX(2);
var result = '1', sum = 0;

for (var i = 1; i <= 1000; i++) {
    result = multiplyBy2(result);
}

for (i = 0; i < result.length; i++) {
    sum = sum + parseInt(result.charAt(i), 10);
}

return sum;
