// Problem 25
// ==========
// 
// The Fibonacci sequence is defined by the recurrence relation:
// 
//   F[n] = F[n[1]] + F[n[2]], where F[1] = 1 and F[2] = 1.
// 
// Hence the first 12 terms will be:
// 
//   F[1] = 1
//   F[2] = 1
//   F[3] = 2
//   F[4] = 3
//   F[5] = 5
//   F[6] = 8
//   F[7] = 13
//   F[8] = 21
//   F[9] = 34
//   F[10] = 55
//   F[11] = 89
//   F[12] = 144
// 
// The 12th term, F[12], is the first term to contain three digits.
// 
// What is the first term in the Fibonacci sequence to contain 1000 digits?

function addNtoM(n, m) {
    var arrn   = n.split(''),
        arrm   = m.split(''),
        result = [],
        diff, i,
        carry  = 0;
    if (arrm.length < arrn.length) {
        diff = arrn.length - arrm.length;
        for (i = 0; i < diff; i++) {
            arrm.unshift(0);
        }
    } else if (arrn.length < arrm.length) {
        diff = arrm.length - arrn.length;
        for (i = 0; i < diff; i++) {
            arrn.unshift(0);
        }
    }
    for (i = arrn.length - 1; i >= 0; i--) {
        var sum = parseInt(arrn[i], 10) + parseInt(arrm[i], 10) + carry;
        carry = parseInt(sum / 10, 10);
        sum = sum % 10;
        result.unshift(sum);
    }
    if (carry > 0) {
        result.unshift(carry);
    }
    return result.join('');
}

var first = '1';
var second = '1';
var n = '2';
var index = 3;
while (n.length < 1000) {
    first = second;
    second = n;
    n = addNtoM(first, second);
    index++;
}

// TODO: return your answer for this prompt.
return index;
