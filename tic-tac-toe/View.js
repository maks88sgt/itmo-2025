export class View {
    constructor(){
        this.board = document.querySelector("#board")
        this.currentTurn = document.querySelector("#current-turn")
        this.restartButton = document.querySelector("#restart-btn")
    }

    renderBoard(board, handleClick){
        this.board.innerHTML = ""
        board.forEach((element, index) => {
            const cell = document.createElement("div")
            cell.classList.add("cell")
            cell.textContent = element
            cell.dataset.index = index
            cell.addEventListener("click", ()=>handleClick(index))
            this.board.appendChild(cell)
        });
    }
}
