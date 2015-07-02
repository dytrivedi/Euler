// Problem 24
// ==========
// 
// A permutation is an ordered arrangement of objects. For example, 3124 is
// one possible permutation of the digits 1, 2, 3 and 4. If all of the
// permutations are listed numerically or alphabetically, we call it
// lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
// 
//                     012   021   102   120   201   210
// 
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3,
// 4, 5, 6, 7, 8 and 9?

function permutationsOf(arr) {
    var result = [];
    if (arr.length === 1) return arr;
    for (var i = 0; i < arr.length; i++) {
        var first = arr[i];
        var rest = arr.slice();
        rest.splice(i, 1);
        var permutations = permutationsOf(rest);
        for (var j = 0; j < permutations.length; j++) {
            result.push([first].concat(permutations[j]));
        }
    }
    return result;
}

// TODO: return your answer for this prompt.
return permutationsOf([0,1,2,3,4,5,6,7,8,9])[999999].join('');
