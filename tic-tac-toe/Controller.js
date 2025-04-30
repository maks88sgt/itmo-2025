export class Controller {
    constructor(model, view){
        this.model = model
        this.view = view
        this.view.renderBoard(this.model.board, (a)=>{
            this.handleMove(a)
        })
    }

    handleMove(index){
        const winner = this.model.makeStep(index)
        this.view.renderBoard(this.model.board, (a)=>{
            this.handleMove(a)
        })
        if(winner){
            setTimeout(()=>alert("Win", this.model.currentPlayer), 500)
        }
    }

}