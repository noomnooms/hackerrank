// Halloween Sale https://www.hackerrank.com/challenges/halloween-sale/problem
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let cnt = 0;
    
    // initial p
    s -= p;
    if (s<0) return cnt;
    cnt += 1;
    
    // disc
    let price = p-d;
    while (price>m && s>0){
        s -= price
        cnt += 1;
        price -= d;
    }
    
    // min price
    cnt += Math.floor(s/m)
    return cnt;
    
}