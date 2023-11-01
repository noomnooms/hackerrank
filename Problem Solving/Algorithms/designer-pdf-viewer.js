// Designer PDF Viewer https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
function designerPdfViewer(h, word) {
    // Write your code here
    let x = word.length;
    let y = h[word.charCodeAt(0)-97]
    for (let i=1; i<word.length; i++){
        y = Math.max(y, h[word.charCodeAt(i)-97])
    }
    return x*y

}