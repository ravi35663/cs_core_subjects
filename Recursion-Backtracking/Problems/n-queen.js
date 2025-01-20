
/*
==> N-Queen Problems 👑:
        N-Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens 
        attack each other.

        Input
            N = 4

        Output:
            [ 
                [ 0, 1, 0, 0 ], 
                [ 0, 0, 0, 1 ], 
                [ 1, 0, 0, 0 ], 
                [ 0, 0, 1, 0 ] 
            ]
            // Here 1 is the place of queen
*/ 

// This solution will check if configuration is possible or not but cannot generate all possible solution
function nQueen(n){
    const arr = [];
    for(let i=0;i<n;i++){
        arr.push((new Array(n)).fill(0));
    }
    placedQueen(arr,0,n);
    console.log("Result is: ",arr);
    return arr
}

function placedQueen(arr, placed_queen, n){
    if(placed_queen == n){
        return arr;
    }
    for( let j=0;j<n;j++){
        if(canQueenBePlacedInThisPosition(placed_queen,j,arr)){
            arr[placed_queen][j] = 1;
            const success =  placedQueen(arr,placed_queen+1,n)
            if(success){
                return true;
            }
            // Backtrack
            arr[placed_queen][j] = 0;
        }
    }
    // If not found any correct position
    return false
}

const canQueenBePlacedInThisPosition = (row,column,board)=>{
    // Check Diagonally 

    // Diagonally upward left check
    let k = column;
    for(let i=row-1,j=column-1; i>=0 && j>=0 ;i--,j--){
        if(board[i][j]){
            return false;
        }
    }

    // Diagonally upward right check
    for(let i=row-1,j=column+1 ;i>=0 && j<board.length;i--,j++){
        if(board[i][j]){
            return false;
        }
    }

    // Check upward column:
    for(let i = row-1;i>=0;i--){
        if(board[i][column]){
            return false;
        }
    }
    return true; // Position is safe to place queen:
}

nQueen(2);

/*
//This will print all possible configuration of N-Queen
var solveNQueens = function(n) {
    const board = [];
    const result = [];
    for(let i=0;i<n;i++){
        board.push((new Array(n)).fill('.'))
    }
    placeQueen(result,board,0)
    result.forEach((item,index)=>{
        item = item.map(k => k.join(''));
        result[index] = item
    })
    return result;
};

function placeQueen(result,board,i){
    if(board.length == i){
        result.push(board.map(row=> [...row]))
        return;
    }
    for(let j=0;j<board.length;j++){
        if(isPlaceSafeToPlaceQueen(board,i,j)){
            board[i][j] = 'Q';
            const success = placeQueen(result,board,i+1);
            if(success){
                return true;
            }
            // Backtrack
            board[i][j] = '.';
        }
    }
    // if not found any place in the row for the queen
    return false;
}
// CanPlace queen
function isPlaceSafeToPlaceQueen(board,row,column){
    // Check Row wise;
    for(let i=0;i<row;i++){
        if(board[i][column] == 'Q'){
            return false;
        }
    }
    // Check upward left diagonally
    for(let i=row - 1,j=column - 1; i>=0 && j>=0; i--,j--){
        if(board[i][j] == 'Q'){
            return false;
        }
    }
    // Check upward right diagonally
    for(let i=row-1,j=column+1;i>=0 && j<board.length;i--,j++){
        if(board[i][j] == 'Q'){
            return false;
        }
    }
    return true;
}

*/