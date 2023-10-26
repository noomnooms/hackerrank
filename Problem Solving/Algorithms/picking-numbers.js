// Picking Numbers https://www.hackerrank.com/challenges/picking-numbers/problem
function pickingNumbers(a) {
    // Write your code here
    let cnt = {}, max = 0;
    for (let i=0; i<a.length; i++){
        if (a[i] in cnt) cnt[a[i]] += 1;
        else cnt[a[i]] = 1; 
    }
    let keys = Object.keys(cnt)
    for (let i=0; i<keys.length; i++){
        if (i!=keys.length-1 && keys[i+1]-keys[i]==1) max = Math.max(max, cnt[keys[i]]+cnt[keys[i+1]])
        max = Math.max(max, cnt[keys[i]]);
    }
    return max
}