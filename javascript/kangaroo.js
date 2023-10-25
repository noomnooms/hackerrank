// Number Line Jumps https://www.hackerrank.com/challenges/kangaroo/problem
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let n = (x1-x2)/(v2-v1);
    if (Number.isInteger(n) && n>0) return 'YES'
    else return 'NO'
}