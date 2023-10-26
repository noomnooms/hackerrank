// Compare the Triplets https://www.hackerrank.com/challenges/compare-the-triplets/problem
function compareTriplets(a, b) {
    var sum_a = 0, sum_b = 0;
    a.forEach((val, i) => {
        if (val > b[i]) sum_a += 1;
        else if (b[i] > val) sum_b += 1;
    })
    return [sum_a, sum_b];
}