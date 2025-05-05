export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.restartButton.addEventListener("click", () => this.resetGame());
    this.view.renderScreen("initial-screen")
    this.view.startButton.addEventListener("click", ()=>{
        const input = document.querySelector("#player-name")
        const fieldset = document.querySelectorAll("[name='markerType']")
        this.model.currentPlayer = Array.from(fieldset).filter(it=>it.checked)[0].id
        this.model.playerName = input.value
        this.model.currentScreen = "game-screen"
        this.render();
    })
    this.render();
  }

  handleMove(index) {
    this.model.makeStep(index);
    this.render(this.model.winner);
    !this.model.winner && setTimeout(() => {
      this.model.makeComputerMove();
      this.render(this.model.winner);
    }, 500);
  }

  resetGame() {
    this.model.resetGame();
    this.render();
  }

  render(winner) {
    this.view.renderScreen(this.model.currentScreen)
    this.view.renderBoard(this.model.board, (a) => {
      this.handleMove(a);
    }, this.model.winLine);
    if(winner){
        setTimeout(() => {
            alert(`Победил ${winner === "X" ? "Игрок" : "Компьютер"}`)
            this.resetGame()
        }, 0)
    }
    this.view.updateCurrentTurn(this.model.currentPlayer);
  }
}
