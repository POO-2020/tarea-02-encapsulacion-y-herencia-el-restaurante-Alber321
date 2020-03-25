import Precio from "./precio.js"
export default class Pedido {
    constructor({fecha,hora,cliente, Numerop}){
        this._fecha = fecha
        this._hora = hora 
        this._cliente = cliente
        this._Numerop = Numerop;
        this._elep = []
    }
    agregarElementos(elemento){
        this._elep.push(elemento)
    }
    listarElementos(){
        console.log ("Elementos: ")
        this.elep.forEach((ele, i) => {
            console.log (`(${i + 1}) --- ${ele.getDescripcion()}`);
        });
    }
    getCostoTotal(){
        let total = 0
        this.elep.forEach((ele) => {
            total = (total + (ele.producto.precio.valor * ele.cantidad))
        })
        total = new Precio (total)
        return total.getPrecio()
    }
    getProductos(){
        let productos = 0
        this.elep.forEach((ele, i) => {
            productos = productos + ele.cantidad
        })
        return productos;
    }
    getNumeroElementos(){
        let numEl = 0
        this.elep.forEach((ele, i) => {
            numEl = numEl + 1
        })
        return numEl;
    }
    getResumen(){
        return`${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} 
        elementos con ${this.getProductos()} productos - total: ${this.getCostoTotal()}`
    }
    getNumeroPedido(){
        return this._Numerop
    }

    Igual(pedido){
        if(pedido.getNumeroPedido() == this._Numerop){ return true}
        else {return false}
    }
}