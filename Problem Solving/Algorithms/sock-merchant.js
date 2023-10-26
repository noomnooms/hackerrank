// Sales by Match https://www.hackerrank.com/challenges/sock-merchant/problem
function sockMerchant(n, ar) {
    // Write your code here
    let tally = {}, cnt = 0;
    ar.forEach(el => {
        if (el in tally){
            cnt += 1;
            delete tally[el];
        }
        else tally[el] = 1;
    })
    return cnt;
}