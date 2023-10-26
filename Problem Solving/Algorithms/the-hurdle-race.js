// The Hurdle Race https://www.hackerrank.com/challenges/the-hurdle-race/problem
function hurdleRace(k, height) {
    // Write your code here
    let max=0;
    height.forEach(el => {
        max = Math.max(max, el)
    })
    
    if (max-k<0) return 0
    else return max-k
}