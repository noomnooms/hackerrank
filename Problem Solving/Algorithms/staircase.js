// Staircase https://www.hackerrank.com/challenges/staircase/problem
function staircase(n) {
    // Write your code here
    var i = n;
    while (i>0){
        i -= 1;
        var str = '';
        for (let j=0; j<n; j++){
            if (j<i) str += ' ';
            else str += '#';
        }
        console.log(str);
    }
}