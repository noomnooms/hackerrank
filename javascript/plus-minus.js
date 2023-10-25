// Plus Minus https://www.hackerrank.com/challenges/plus-minus/problem
function plusMinus(arr) {
    // Write your code here
    var pos=0, neg=0, zer = 0;
    var denom = arr.length;
    arr.forEach((el) => {
        if (el>0) pos+=1;
        else if (el<0) neg += 1;
        else zer += 1;
    })
    console.log((pos/denom).toFixed(6));
    console.log((neg/denom).toFixed(6));
    console.log((zer/denom).toFixed(6));
}