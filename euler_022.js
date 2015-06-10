// Problem 22
// ==========
// 
// Using names.txt, a 46K text file containing over five-thousand first names,
// begin by sorting it into alphabetical order. Then working out the
// alphabetical value for each name, multiply this value by its alphabetical
// position in the list to obtain a name score.
// 
// For example, when the list is sorted into alphabetical order, COLIN, which
// is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So,
// COLIN would obtain a score of 938 * 53 = 49714.
// 
// What is the total of all the name scores in the file?

var fs = require('fs');
var names = fs.readFileSync('names.txt').toString().split(',');
var temp;

for (var i = 0; i < names.length; i++) {
    names[i] = names[i].replace(/["]+/g, '');
    for (var j = i - 1; j >= 0; j--) {
        if (names[j + 1] < names[j]) {
            temp = names[j + 1];
            names[j + 1] = names[j];
            names[j] = temp;
        } else {
            break;
        }
    }
}

var sum = 0;

for (i = 0; i < names.length; i++) {
    var alphabeticalValue = 0;
    for (var j = 0; j < names[i].length; j++) {
        alphabeticalValue += names[i].charCodeAt(j) - 64;
    }
    sum += alphabeticalValue * (i + 1);
}

// TODO: return your answer for this prompt.
return sum;
