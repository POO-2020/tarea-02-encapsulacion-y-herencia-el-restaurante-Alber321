import Precio from "./precio.js"
export default class ElementoP {
    constructor(producto, cantidad){
        this._producto = producto
        this._cantidad = cantidad
    }
    getDescripcion(){
        let total = this._cantidad * this._producto._precio._valor
        total = new Precio(total)
        return (`${this._cantidad} X ${this._producto._nombre} ${total.getPrecio()}`)
    }
}