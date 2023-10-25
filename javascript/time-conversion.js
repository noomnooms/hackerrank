// Time Conversion https://www.hackerrank.com/challenges/time-conversion/problem
function timeConversion(s) {
    // Write your code here
    if (s.slice(-2) == 'AM' && s.slice(0,2)=='12') return '00'+s.slice(2, 8);
    if (s.slice(-2) == 'PM'){
        var tmp = (parseInt(s.slice(0,2))+12).toString();
        if (tmp == '24') tmp = '12'
        return tmp+s.slice(2, 8);
    }
    return (s.slice(0, -2))
}