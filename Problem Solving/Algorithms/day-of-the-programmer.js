// Day of the Programmer https://www.hackerrank.com/challenges/day-of-the-programmer/problem
function dayOfProgrammer(year) {
    // Write your code here
    if (year === 1918) return '26.09.'+year.toString()
    if (year<1918 && year%4==0) return '12.09.'+year.toString()
    if (year>1918 && (year%400 == 0 || (year%4==0)&&(year%100!=0))) return '12.09.'+year.toString()
    return '13.09.'+year.toString()
}