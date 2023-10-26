// Migratory Birds https://www.hackerrank.com/challenges/migratory-birds/problem
function migratoryBirds(arr) {
    // Write your code here
    let cnt = {}, max = 0;
    arr.forEach(el => {
        if (el in cnt) cnt[el] += 1;
        else cnt[el] = 1;
        max = Math.max(max, cnt[el])
    })
    let ans;
    Object.keys(cnt).every(key => {
        if (cnt[key] === max){ 
            ans = key;
            return false
        }
        return true
    })
    return ans;
}