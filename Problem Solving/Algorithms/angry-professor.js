// Angry Professor https://www.hackerrank.com/challenges/angry-professor/problem
function angryProfessor(k, a) {
    // Write your code here
    let count = 0;
    for (let i=0; i<a.length; i++){
        if (a[i]<=0) count += 1
        if (count==k) return 'NO'
    }
    return 'YES'
}