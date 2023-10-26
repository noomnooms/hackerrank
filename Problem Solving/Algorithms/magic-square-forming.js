// Forming a Magic Square https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true
// Magic sum M = n(2n+1)/2 = 15 
// A magic square always has the number 5 at the very center of it
// Even numbers should be on the squares
// Odd numbers are on the edges
let matrix_list = [
    [[8,1,6], [3,5,7], [4,9,2]],
    [[6,1,8], [7,5,3], [2,9,4]],
    [[4,9,2], [3,5,7], [8,1,6]],
    [[2,9,4], [7,5,3], [6,1,8]],
    [[8,3,4], [1,5,9], [6,7,2]],
    [[4,3,8], [9,5,1], [2,7,6]],
    [[6,7,2], [1,5,9], [8,3,4]],
    [[2,7,6], [9,5,1], [4,3,8]]
]

function formingMagicSquare(s) {
    let min_cost = 1000, cost;
    for (let i=0; i<8; i++){
        cost = 0;
        for (let j=0; j<3; j++){
            for (let k=0; k<3; k++){
                cost += Math.abs(matrix_list[i][j][k]-s[j][k])
            }
        }
        min_cost = Math.min(min_cost, cost)
    }
    return min_cost
}