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
var rules = [
    {
        places: 2
    },
    {
        places : 1,
        unit   : 'hundred',
        suffix : 'and'
    },
    {
        places : 2,
        unit   : 'thousand'
    }
];

function numberToWords(num) {
    var numberString = '';

    function toWord(n, index) {
        if (n === 0) {
            return numberString;
        }

        if (index > rules.length - 1) {
            throw new Error ('unsupported number');
        }

        var currentNum, currentWord, rule = rules[index];
        currentNum = n % Math.pow(10, rule.places);
        currentWord = '';

        if (currentNum < 20) {
            currentWord = words[currentNum.toString()];
        } else {
            currentWord = tens[parseInt(currentNum / 10, 10).toString()] + words[(currentNum % 10).toString()];
        }

        numberString =  currentWord + (currentWord && rule.unit ? rule.unit : '') + (numberString && rule.suffix ? rule.suffix : '') +  numberString;

        n = parseInt(n / Math.pow(10, rule.places), 10);

        return toWord(n, ++index);
    }

    return toWord(num, 0);
}

var sum = 0;
for (var i = 1; i <= 1000; i++) {
    sum = sum + numberToWords(i).length;
}

// TODO: return your answer for this prompt.
return sum;
