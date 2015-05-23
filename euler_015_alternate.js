// Problem 15
// ==========
// 
// Starting in the top left corner of a 2 * 2 grid, there are 6 routes
// (without backtracking) to the bottom right corner.
// 
// How many routes are there through a 20 * 20 grid?



// TODO: return your answer for this prompt.

function traverseGrid(length) {
    function printGrid(coords) {
            var grid = [];
            var row = [];
            var endLine = [];
            for (var i = 0; i <= length; i++) {
                row.push(' ');
                endLine.push('-');
            }
            for (var j = 0; j <= length; j++) {
                grid.push(row.slice());
            }
            for (var k = 0; k < coords.length; k++) {
                grid[coords[k][0]][coords[k][1]] = '*';
            }
            for (var l = 0; l < grid.length; l++) {
                console.log(grid[l].join(' '));
            }
            console.log(endLine.join('-'));
    }
    function traverse(x, y, coords) {
        if (x > length || y > length) return 0;
        coords = coords.slice();
        coords.push([x, y]);
        if (x === length && y === length) {
            printGrid(coords);
            return 1;
        }
        return traverse(x + 1, y, coords) + traverse(x, y + 1, coords);
    }
    return traverse(0, 0, []);
}

return traverseGrid(5);
