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
/*
==> Problem Variations:
    1) Print one configuration
    2) Print all configuration
    3) Count possible configuration
*/ 
class Solution {
    solveNQueens(n) {
        //your code goes here
        const matrix = new Array(n);
        const cols = new Array(n).fill('.')
        for(let i=0; i<n; i++){
            matrix[i]=[...cols];
        }
        const result = [];
        this.possibleCombination(matrix, 0, result);
        return result;
    }

    possibleCombination(matrix, rows, result){
        if(rows == matrix.length){
            // Add the result:

            result.push(matrix.map(item=>item.join('')));
            return;
        }
        // Move column-wise
        for(let j=0; j<matrix.length; j++){
            if(this.canPlaceQueen(matrix, rows, j)){
                matrix[rows][j] = 'Q';
                this.possibleCombination(matrix, rows+1, result)
                // Backtrack so that you can find other positions as well
                matrix[rows][j] = '.';
            }
        }
        return;
    }

    canPlaceQueen(board, r, c){
        // Move diagonally left
        let i=r;
        let j=c;
        while(i>=0 && j>=0){
            if(board[i][j] == 'Q'){
                return false;
            }
            i--;
            j--;
        }
        // Move up
        i=r;
        j=c;
        while(i>=0){
            if(board[i][j] == 'Q'){
                return false;
            }
            i--;
        }
        // Move diagonally right:
        i=r;
        j=c;
        const n = board.length
        while(i>=0 && j<n){
            if(board[i][j] == 'Q'){
                return false;
            }
            i--;
            j++;
        }
        return true;
    }
}


