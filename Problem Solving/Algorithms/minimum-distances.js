// Minimum Distances https://www.hackerrank.com/challenges/minimum-distances/problem
function minimumDistances(a) {
    // Write your code here
    let index = {}
    for (let i=0; i<a.length; i++){
        try {
            index[a[i]].push(i);
        }catch (e){
            index[a[i]] = [i];
        }
    }
    let min_dist = a.length+1
    for (const key in index){
        if (index[key].length>1){
            for (let i=0; i<index[key].length-1; i++){
                min_dist = Math.min(min_dist, index[key][i+1]-index[key][i])
            }
        }
    }
    if (min_dist == a.length+1) return -1
    return min_dist
}