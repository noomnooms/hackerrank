// Append and Delete https://www.hackerrank.com/challenges/append-and-delete/problem
function appendAndDelete(s, t, k) {
    // Write your code here
    let same=Math.min(s.length, t.length);
    for (let i=0; i<Math.min(s.length, t.length); i++){
        if (s[i]!=t[i]){
            same = i;
            break
        }
    }
    
    let x = s.length + t.length - (2*same);
    if (x <= k && (k-x)%2 == 0 || (s.length+t.length)<=k) return 'Yes';
    return 'No'
}