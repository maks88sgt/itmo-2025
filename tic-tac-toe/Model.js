export class Model {
    constructor(){
        this.board = new Array(9).fill("")
        this.currentPlayer = "X"
        this.winner = null
        this.winLine = null
        this.currentScreen = "initial-screen"
        this.playerName = ""
    }

    checkWinner(){
        const winCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        const board = this.board

        const winLine = winCombinations.find((item)=>{
            const [a,b,c] = item
            return board[a] && (board[a] === board[b]) && (board[a] === board[c])
        })

        if(winLine){
            this.winner = this.currentPlayer
            this.winLine = winLine;
        }
        return null;
    }

    makeStep(index){
        if(this.currentPlayer != "X") return
        if(this.board[index]) return
        this.board[index] = this.currentPlayer
        this.checkWinner()
        this.currentPlayer = "O"
    }

    resetGame(){
        this.board = new Array(9).fill("")
        this.winner = null
        this.winLine = null
        this.currentPlayer = "X"
    }

    makeComputerMove(){
        if(this.currentPlayer != "O") return
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const availableCells = this.getAvailableCells()
        const index = getRandomInt(availableCells.length)
        const cellIndex = availableCells[index]
        this.board[cellIndex] = this.currentPlayer
        this.checkWinner()
        this.currentPlayer = "X"
    }

    getAvailableCells(){
       return this.board.map((item, index)=> item ? "" : index).filter(it=> typeof it === "number")
    }

}