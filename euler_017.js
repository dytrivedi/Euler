// Problem 17
// ==========
// 
// If the numbers 1 to 5 are written out in words: one, two, three, four,
// five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// 
// If all the numbers from 1 to 1000 (one thousand) inclusive were written
// out in words, how many letters would be used?
// 
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
// forty-two) contains 23 letters and 115 (one hundred and fifteen) contains
// 20 letters. The use of "and" when writing out numbers is in compliance
// with British usage.

var words = {
    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
};
var tens = {
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety"
};

function numberToWords(num) {
    var temp, numberString = '';
    function toWord(n) {
        var nS = '';
        if (n < 20) {
            nS = nS + words[n.toString()];
        } else {
            nS = nS + tens[parseInt(n/10, 10).toString()] + words[(n % 10).toString()];
        }
        return nS;
    }
    temp = num % 100;
    numberString = numberString + toWord(temp.toString());

    if (num > 99) {
        temp = parseInt(num / 100, 10);
        temp = parseInt(temp % 10, 10);
        if (temp) {
            numberString = toWord(temp.toString()) + 'hundred' + (numberString ? 'and' : '')  + numberString;
        }
    }

    if (num > 999) {
        temp = parseInt(num / 1000, 10);
        numberString = toWord(temp.toString()) + 'thousand' + numberString;
    }

    return numberString;
}

var sum = 0;

for (var i = 1; i <= 1000; i++) {
    sum = sum + numberToWords(i).length;
}

// TODO: return your answer for this prompt.
return sum;
