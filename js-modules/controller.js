export class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view
        const button = document.querySelector("button")
        button.addEventListener("click", this.handleClick.bind(this))
    }

    handleClick(){
        this.model.counter += 1;
        this.view.updateView(this.model.counter)
        if(this.checkStatus()){
            this.view.notifyUser()
        }
    }

    getCurrentState(){
        return `Current counter is ${this.model.counter}`
    }

    checkStatus(){
        return this.model.counter > 10
    }

}

export default Controller