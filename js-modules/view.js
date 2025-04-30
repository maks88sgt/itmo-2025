export class View {
    constructor(){
        this.counterContainer = document.querySelector("#counter-container")
    }
    updateView(counter){
        this.counterContainer.innerHTML = counter
    }
    notifyUser(){
        //alert("Too many clicks")
        this.counterContainer.append("Too many clicks")
    }
}

export default View