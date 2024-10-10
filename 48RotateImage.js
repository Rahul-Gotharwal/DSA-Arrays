// function rotate(matrix){
//     const n = matrix.length 
//     const rotated = Array.from({length:n},()=>Array(n).fill(0));
//     for(let i =0 ; i<n ; i++){
//         for(let j =0 ;j<n;j++){
//             rotated[j][n-i-1] = matrix[i][j]
//         }
//     }
//     return rotated
// }

// function main() {
//     const arr = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];

// const rotated = rotate(arr);
// console.log("Rotated Image");
// for(let i =0 ; i<rotated.length ; i++){
//     let row = '';
//     for(let j = 0 ; j<rotated[0].length ; j++){
//         row+=rotated[i][j] +'    '
//     }
//     console.log(row.trim());
// }
// }
// main();


//---------------------Optimal Appraoch-----------------//
function rotate(matrix) {
    const n = matrix.length;
    // Transpose the matrix
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            // same as j = 0 , j<i
            //i = 0 No swaps needed since j starts at 0 which is not less than i.
            // means diagonal are same during transpose of matrix
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }   
    }
    
    // Reverse each row of the matrix
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

function main() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    rotate(arr);
    console.log("Rotated Image");
    for (let i = 0; i < arr.length; i++) {
        let row = '';
        for (let j = 0; j < arr[0].length; j++) {
            row += arr[i][j] + ' ';
        }
        console.log(row.trim());
    }
}

main();

