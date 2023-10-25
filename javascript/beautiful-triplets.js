// Beautiful Triplets https://www.hackerrank.com/challenges/beautiful-triplets/problem
function beautifulTriplets(d, arr) {
    // Write your code here
    let cnt = 0;
    for (let i=0; i<arr.length-2; i++){
        for (let j=i+1; j<arr.length-1; j++){
            if (arr[j]-arr[i] == d){
                for (let k=j+1; k<arr.length; k++){
                    if (arr[k]-arr[j] == d) cnt += 1
                }
            }
        }
    }
    return cnt
}