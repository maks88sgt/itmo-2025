export class GameModel {
    constructor() {
      this.reset();
    }
  
    reset() {
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.winner = null;
    }
  
    makeMove(index) {
      if (!this.board[index] && !this.winner) {
        this.board[index] = this.currentPlayer;
        this.checkWinner();
        if (!this.winner) this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        return true;
      }
      return false;
    }
  
    checkWinner() {
      const combos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ];
      for (const [a,b,c] of combos) {
        if (this.board[a] && this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
          this.winner = this.board[a];
        }
      }
    }
  }

  export class GameView {
    constructor(container, onCellClick) {
      this.container = container;
      this.onCellClick = onCellClick;
      this.cells = [];
  
      this.init();
    }
  
    init() {
      this.container.innerHTML = '';
      const board = document.createElement('div');
      board.className = 'board';
  
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('click', () => this.onCellClick(i));
        board.appendChild(cell);
        this.cells.push(cell);
      }
  
      this.container.appendChild(board);
    }
  
    update(board) {
      this.cells.forEach((cell, i) => {
        cell.textContent = board[i] || '';
        cell.classList.toggle('filled', Boolean(board[i]));
      });
    }
  
    showWinner(winner) {
      if (winner) {
        setTimeout(() => {
          alert(`${winner} победил!`);
        }, 100); // чуть позже, чтобы отобразился последний ход
      }
    }
  }  
  
  export class GameController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.view.update(this.model.board);
    }
  
    handleCellClick(index) {
      const moved = this.model.makeMove(index);
      if (moved) {
        this.view.update(this.model.board);
        if (this.model.winner) {
          this.view.showWinner(this.model.winner);
        }
      }
    }
  }

const app = document.getElementById('app');
const model = new GameModel();
const view = new GameView(app, (i) => controller.handleCellClick(i));
const controller = new GameController(model, view);