// Bigger is Greater https://www.hackerrank.com/challenges/bigger-is-greater/problem 
function biggerIsGreater(w) {
    // Write your code here
    let index;
    for (let i=w.length-1; i>0; i--){
        if (w[i]> w[i-1]){
            index = i-1;
            break
        }
    }
    if (index != undefined){
        let ans = w.slice(0, index), tmp = index+1;
        for (let i=index; i<w.length; i++){
            if (w[i]>w[index] && w[i]<w[tmp]) tmp = i;
        }
        let rightside = w.slice(index, tmp) + w.slice(tmp+1, w.length)
        ans += w[tmp] + sortAlpha(rightside)
        return ans
    }else return 'no answer'
}
function sortAlpha(word) {
    return word.split("")
               .sort()
               .join("");
}