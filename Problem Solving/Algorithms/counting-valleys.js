// Counting Valleys https://www.hackerrank.com/challenges/counting-valleys/problem
function countingValleys(steps, path) {
    // Write your code here
    let alt = 0, valley = false, cnt = 0;
    for (const char of path){
        if (char==='U') alt += 1;
        else alt -= 1;
        
        if (alt<0 && !valley){
            cnt += 1;
            valley = true;
        }
        if (alt>=0) valley = false;
    }
    return cnt;
}