// Simple Array Sum https://www.hackerrank.com/challenges/simple-array-sum/problem
function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    ar.forEach(element => {
        sum += element;
    })
    return sum;
}