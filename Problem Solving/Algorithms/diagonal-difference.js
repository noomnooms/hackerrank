// Diagonal Difference https://www.hackerrank.com/challenges/diagonal-difference/problem
function diagonalDifference(arr) {
    // Write your code here
    var sum_a = 0, sum_b = 0;
    var i = 0, j = arr[0].length-1;
    
    // var mid = false;
    // Math.ceil(3/2)
    arr.forEach((element) => {
        sum_a += element[i];
        sum_b += element[j];
        i += 1;
        j -= 1;
    })
    return Math.abs(sum_a - sum_b);
    
}