// Climbing the Leaderboard https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
// function climbingLeaderboard(ranked, player) {
//     // Write your code here
//     let board = {}, min = ranked[0], max = ranked[0], record = [];
//     for (score in ranked){
//         board[ranked[score]] = true;
//         min = Math.min(min, ranked[score])
//         max = Math.max(max, ranked[score])
//     }
//     for (score in player){
//         board[player[score]] = true;
//         min = Math.min(min, player[score])
//         max = Math.max(max, player[score])
//         let curr = Object.keys(board);
//         if (Math.abs(min-score)<Math.abs(max-score)){
//             for(let i=0; i<curr.length; i++){
//                 // console.log(curr[i], player[score], curr[i] == player[score])
//                 if (curr[i] == player[score]){
//                     record.push(curr.length-i)
//                     break;
//                 }
//             }
//         }
//         if (Math.abs(min-score)>Math.abs(max-score)){
//             for(let i=curr.length-1; i>=0; i--){
//                 if (board[i] == player[score]){
//                     curr.push(curr.length-i)
//                     break;
//                 }
//             }
//         }
//     }
//     return record
// }