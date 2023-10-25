// Breaking the Records https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(scores) {
    // Write your code here
    let min=scores[0], max=scores[0];
    let min_cnt=0, max_cnt=0;
    for (let i=1; i<scores.length; i++){
        if (Math.min(scores[i], min) == scores[i] && scores[i]!=min){ 
            min_cnt+=1;
            min = scores[i];
        }
        else if (Math.max(scores[i], max) == scores[i] && scores[i]!=max){ 
            max_cnt+=1;
            max = scores[i];
        }
    }
    return [max_cnt, min_cnt]
}