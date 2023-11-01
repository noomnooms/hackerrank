// Utopian Tree https://www.hackerrank.com/challenges/utopian-tree/problem
function utopianTree(n) {
    // Write your code here
    let ans = 1;
    for (let i=1; i<=n; i++){
        if (i%2==0) ans += 1
        else ans *= 2
    }
    return ans
}