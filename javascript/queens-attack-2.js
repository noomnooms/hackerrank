// Queen's Attack II https://www.hackerrank.com/challenges/queens-attack-2/problem
function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    var obj = {
        'N': n-r_q, 'S': r_q-1, 'E': n-c_q, 'W': c_q-1,
        'NE': Math.min(n-r_q, n-c_q),
        'NW': Math.min(n-r_q, c_q-1),
        'SE': Math.min(r_q-1, n-c_q),
        'SW': Math.min(r_q-1, c_q-1),
    };
    var tmp;
    obstacles.forEach(el => {
        // North
        if (el[0]>r_q && el[1]==c_q){
            tmp = el[0]-r_q-1;
            obj['N'] = Math.min(obj['N'], tmp);
        }
        // South
        if (el[0]<r_q && el[1]==c_q){
            tmp = r_q-el[0]-1;
            obj['S'] = Math.min(obj['S'], tmp);
        }
        // East
        if (el[0]==r_q && el[1]>c_q){
            tmp = el[1]-c_q-1;
            obj['E'] = Math.min(obj['E'], tmp);
        }
        // West
        if (el[0]==r_q && el[1]<c_q){
            tmp = c_q-el[1]-1;
            obj['W'] = Math.min(obj['W'], tmp);
        }
        // Northeast
        if ((el[0]-r_q)==(el[1]-c_q)){
            tmp = el[0]-r_q-1;
            if (tmp>=0) obj['NE'] = Math.min(obj['NE'], tmp);
        }
        // Northwest
        if ((el[0]-r_q)==(c_q-el[1])){
            tmp =  el[0]-r_q-1;
            if (tmp>=0) obj['NW'] = Math.min(obj['NW'], tmp);
        }
        // Southeast
        if ((r_q-el[0])==(el[1]-c_q)){
            tmp = r_q-el[0]-1;
            if (tmp>=0) obj['SE'] = Math.min(obj['SE'], tmp);
        }
        // Southwest
        if ((r_q-el[0])==(c_q-el[1])){
            tmp = r_q-el[0]-1;
            if (tmp>=0) obj['SW'] = Math.min(obj['SW'], tmp);
        }
    })
    return Object.values(obj).reduce((a, b) => {
        return a+b
    })
}