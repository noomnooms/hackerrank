// Electronics Shop https://www.hackerrank.com/challenges/electronics-shop/problem
function getMoneySpent(keyboards, drives, b) {
    let max = -1, sum;
    for (let i=0; i<keyboards.length; i++){
        for (let j=0; j<drives.length; j++){
            sum = keyboards[i]+drives[j];
            if (sum<=b) max = Math.max(max, sum);
        }
    }
    return max
}