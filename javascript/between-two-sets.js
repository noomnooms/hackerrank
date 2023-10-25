// Between Two Sets https://www.hackerrank.com/challenges/between-two-sets/problem
function getTotalX(a, b) {
    // Write your code here
    let cnt = 0;
    for (let i=Math.max(...a); i<=Math.min(...b); i++){
        let flag = true;
        for (let j=0; j<a.length; j++) if (i%a[j]!=0) flag=false;
        for (let j=0; j<b.length; j++) if (b[j]%i!=0) flag=false;
        if (flag) cnt+=1;
    }
    return cnt
}