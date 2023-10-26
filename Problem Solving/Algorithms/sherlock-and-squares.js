// Sherlock and Squares https://www.hackerrank.com/challenges/sherlock-and-squares/problem
function squares(a, b) {
    // Write your code here
    return Math.floor(Math.sqrt(b)) - Math.floor(Math.sqrt(a-1))
}