// Bill Division https://www.hackerrank.com/challenges/bon-appetit/problem
function bonAppetit(bill, k, b) {
    // Write your code here
    let sum_a = bill.slice(0, k).reduce((partialSum, a) => partialSum + a, 0);
    let sum_b = bill.slice(k+1, bill.length).reduce((partialSum, a) => partialSum + a, 0);
    if ((sum_a+sum_b)/2 == b) console.log('Bon Appetit');
    else console.log(b-((sum_a+sum_b)/2));
}