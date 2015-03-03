// Problem 4
// =========
// 
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 * 99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.



// TODO: return your answer for this prompt.
function isPalindrome(n) {
    var num = n.toString();
    var h = parseInt(num.length / 2, 10);
    var len = num.length;
    var isNumPalindrome = true;
    for (var i = 0; i < h; i++) {
        if (num[i] !== num[len - i - 1]) {
            isNumPalindrome = false;
            break;
        }
    }
    return isNumPalindrome;
}
var result;
for (var i = 999; i >= 100; i--) {
    for (var j = i; j >= 100; j--) {
        var tmp = i * j;
        if (isPalindrome(tmp)) {
            if (!result || tmp > result) {
                result = tmp;
            }
        }
    }
}
return result;
