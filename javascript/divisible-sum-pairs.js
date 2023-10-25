// Divisible Sum Pairs https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let cnt = 0;
    for(let i=0; i<n-1; i++){
        for (let j=i+1; j<n; j++){
            if ((ar[i]+ar[j])%k == 0) cnt+=1;
        }
    }
    return cnt;
    
}