// Apple and Orange https://www.hackerrank.com/challenges/apple-and-orange/problem
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let ap=0, orn=0;
    apples.forEach(el => {
        if ((a+el)>=s && (a+el)<=t) ap+=1;
    })
    oranges.forEach(el => {
        if ((b+el)>=s && (b+el)<=t) orn+=1;
    })
    console.log(ap);
    console.log(orn);
}