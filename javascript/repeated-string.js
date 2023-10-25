// Repeated String https://www.hackerrank.com/challenges/repeated-string/problem
function repeatedString(s, n) {
    // Write your code here
    let a = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i]=='a') a+=1
    }
    let sum = a*Math.floor(n/s.length);
    for (let i=0; i<(n%s.length); i++){
        if (s[i]=='a') sum+=1
    }
    return sum
    
}