// Birthday Cake Candles https://www.hackerrank.com/challenges/birthday-cake-candles/problem
function birthdayCakeCandles(candles) {
    // Write your code here
    candles.sort(function(a, b) {
        return a - b;
    });
    candles.reverse();
    var tmp_val = candles[0], sum;
    candles.every((el, i)=> {
      if (el < tmp_val) {
        sum = i;
        return false;
      }
      return true;
    });
    if (sum==undefined) return candles.length;
    return sum
}