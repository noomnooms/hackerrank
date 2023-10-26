// Grading Students https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
    // Write your code here
    grades.forEach(function(el, i) {
        if (el>37 && 5-(el%5)<3){
            this[i] = el + 5-(el%5);
        }
    }, grades);
    return grades;
}