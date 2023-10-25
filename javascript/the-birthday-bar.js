// Subarray Division https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
    // Write your code here
    let cnt = 0;
    let tmp = s.slice(0, m).reduce(function(a, b) { return a + b; }, 0);
    let i = 0, j = m;
    
    while (j<=s.length){
        if (tmp == d) cnt += 1;
        tmp -= s[i]
        tmp += s[j]
        i+=1;
        j+=1;
    }
    return cnt
}