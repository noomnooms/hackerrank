// Non-Divisible Subset https://www.hackerrank.com/challenges/non-divisible-subset/problem
function nonDivisibleSubset(k, s) {
    // Write your code here
    const cnt = Array(k).fill(0);
    s.forEach(el => {
        cnt[el%k] += 1
    })
    let ans = Math.min(cnt[0], 1)
    if (k%2 == 0){ // k is even
        ans += Math.min(cnt[Math.floor(k/2)], 1);
    }
    for (let i=1; i<=Math.floor(k/2); i++){
        if (i!= k-i){
            ans += Math.max(cnt[i], cnt[k-i])
        }
    }
    return ans
}