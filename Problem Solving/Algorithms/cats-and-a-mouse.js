// Cats and a Mouse https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
function catAndMouse(x, y, z) {
    if (Math.abs(z-x)<Math.abs(z-y)) return "Cat A"
    if (Math.abs(z-x)>Math.abs(z-y)) return "Cat B"
    else return "Mouse C"
}