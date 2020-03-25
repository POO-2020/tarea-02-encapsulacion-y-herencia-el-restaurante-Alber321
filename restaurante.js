export default class Restaurante {
    constructor(nombre, telefono, direccion){
        this._nombre = nombre
        this._telefono = telefono 
        this._direccion = direccion
        this._productos = []
        this._pedidos = []
    }
    registrarProducto(producto){
        this._productos.push(producto)
    }
    registrarPedido(pedido){
        let found = this.buscarPedido(pedido)
        if (found == null){
            this._pedidos.push(pedido)
            return true
        }else{
            return false
        }
    }
    listaProductos(){
        console.log("Productos: ")
        this.productos.forEach( (produ) => {
            console.log(produ.getDescripcion())
        })
    }
    listaPedidos(){
        console.log("Pedidos: ")
        this.pedidos.forEach( (pedi, i) => {
            console.log(`(${i + 1}) --- ${pedi.getResumen()}`)
        })
    }
    buscarPedido(pedido){
        let buscar = this._pedidos.find(pedi => pedi._Igual(pedido))
        if(buscar == undefined){
            return null
        }else
        {
            return buscar
        }
    }
    eliminarPedido(pedido){
        let found =  this.buscarPedido(pedido)
        if(found == null) return false
        else {
        let i = this._pedidos.indexOf(found)
        this._pedidos.splice(i,1)
        return true
            }
        }
    modificarPedido(pedido, nuevoPedido){
        let found = this.buscarPedido(pedido)
        if(found == null) return false
        else{
            let i = this._pedidos.indexOf(found)
            this._pedidos[i] = nuevoPedido
            return true
        }
    }
}
