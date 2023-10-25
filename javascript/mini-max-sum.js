// Mini-Max Sum https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
    // Write your code here
    arr.sort()
    var min = 0, max=0;
    for (let i=0; i<arr.length; i++){
        if (i!=0) max += arr[i];
        if (i!=arr.length-1) min += arr[i];
    }
    console.log(min, max)
}