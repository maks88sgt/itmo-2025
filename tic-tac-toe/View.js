export class View {
    constructor(){
        this.initialScreen = document.querySelector("#initial-screen")
        this.gameScreen = document.querySelector("#game-screen")
        this.board = document.querySelector("#board")
        this.currentTurn = document.querySelector("#current-turn")
        this.restartButton = document.querySelector("#restart-btn")
        this.startButton = document.querySelector("#start-btn")
    }

    renderBoard(board, handleClick, winCombination = []){
        this.board.innerHTML = ""
        board.forEach((element, index) => {
            const cell = document.createElement("div")
            cell.classList.add("cell")
            if(winCombination?.includes(index)){
                cell.classList.add("winner")
            }
            cell.textContent = element
            cell.dataset.index = index
            cell.addEventListener("click", ()=>handleClick(index))
            this.board.appendChild(cell)
        });
    }

    updateCurrentTurn(currentTurn){
        this.currentTurn.innerHTML = `Сейчас ходит: ${currentTurn}`
    }

    renderScreen(screen){
        if(screen === "game-screen"){
            this.gameScreen.classList.remove("hidden")
            this.initialScreen.classList.add("hidden")
        } else {
            this.initialScreen.classList.remove("hidden")
            this.gameScreen.classList.add("hidden")
        }
    }
}
