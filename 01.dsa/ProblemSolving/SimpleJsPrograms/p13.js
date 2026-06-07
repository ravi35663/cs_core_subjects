//Javascript to Find the Sum of Each Row and Column of a Matrix
const rows = 4;
const columns = 3;
const matrix = [[1,2,3],[4,5,6],[7,8,9],[-1,-2,-3]];
//Rows sum
for(let i=0;i<rows;i++){
    let row_sum = 0;
    for(let j=0;j<columns;j++){
        row_sum +=matrix[i][j];
    }
    console.log(`Row ${i+1} sum: `,row_sum);
}

//Column sum
for(let i=0;i<columns;i++){
    let column_sum = 0;
    for(let j=0;j<rows;j++){
        column_sum +=matrix[j][i];
    }
    console.log(`Column ${i+1} sum: `,column_sum);
}