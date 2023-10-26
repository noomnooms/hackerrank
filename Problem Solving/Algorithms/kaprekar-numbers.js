// Modified Kaprekar Numbers https://www.hackerrank.com/challenges/kaprekar-numbers/problem
function kaprekarNumbers(p, q) {
    // Write your code here
    let nums = '', square, left, right;
    for (let i=p; i<=q; i++){
        square = (i*i).toString();
        left = square.slice(0, Math.floor(square.length/2));
        left = (left.length != 0) ? parseInt(left) : 0
        right = square.slice(Math.floor(square.length/2));
        if (parseInt(right)==0) right = NaN;
        else if (right.length == 0) right = 0;
        else right = parseInt(right)
        
        if (right+left == i) nums += i.toString() + ' '
    }
    if (nums.length > 0) console.log(nums)
    else console.log('INVALID RANGE')
}