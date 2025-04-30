import {View} from "./View.js"
import {Model} from "./Model.js"
import {Controller} from "./Controller.js"

const view = new View()
const model = new Model()

window.view = view
window.model = model

const controller = new Controller(model, view)




