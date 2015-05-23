// Problem 15
// ==========
// 
// Starting in the top left corner of a 2 * 2 grid, there are 6 routes
// (without backtracking) to the bottom right corner.
// 
// How many routes are there through a 20 * 20 grid?

function central_binomial_matrix(n) {
    var length = n + 1;
    var matrix = [];
    for (var i = 0; i < length; i++) {
        var row = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0) {
                row[j] = 1;
            } else if (j === i) {
                row[j] = row[j - 1] * 2;
            } else {
                row[j] = row[j - 1] + matrix[i - 1][j];
            }
        }
        matrix.push(row);
    }
    return matrix[n][n];
}

// TODO: return your answer for this prompt.
return central_binomial_matrix(20);
