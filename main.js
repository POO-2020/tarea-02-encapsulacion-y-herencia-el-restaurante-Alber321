import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elemento_pedido.js";
import Direcion from "./direccion.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Restaurante from "./restaurante.js";
import ClienteFrecuente from "./cliente_frecuente.js";

class Main {
    constructor(){
        this.precio = new Precio(75.20)
        this.producto = new Producto("Pizza", this.precio)
        this.producto2 = new Producto("Hamburguesa", new Precio(50.50))
        this.elementoPedido = new ElementoPedido(this.producto, 2)
        this.elementoPedido2 = new ElementoPedido(this.producto2, 1)
        this.direccion = new Direcion("Calle Falsa", 425, 25, "Chida", 28863, "Colima", "Colima")
        this.cliente = new Cliente("Luis Alberto Solis", this.direccion, 3122100818)
        this.cliente2 = new Cliente("Jorge Luis Aparicio", this.direccion, 3148291023)
    
        let datoRestaurante = {
            nombre: "Restaurante Real",
            telefono: 3330289371,
            direccion: this.direccion
        }


        let datosPedido = {
            fecha: new Fecha(new Date(2020,1,21)),
            hora: new Tiempo(11 , 30, "am"),
            cliente: this.cliente,
            numeroPedido: 21
        }

        let datosPedido2 = {
            fecha: new Fecha(new Date(2020,2,11)),
            hora: new Tiempo(6, 21, "pm"),
            cliente: this.cliente2,
            numeroPedido: 41
        }
        let datosClienteFrecuente = {
            nombre: "Mario Goku Alejandro",
            direccion: new Direcion("Calle Chida", 123, 12, "Real", 123456, "Colima", "Colima"),
            telefono: 3122839210,
            numeroCliente: 1528,
            fecha: new Fecha(new Date(2020,1,2))
        }

        this.pedido = new Pedido(datosPedido)
        this.pedido2 = new Pedido(datosPedido2)

        this.clienteFrecuente = new ClienteFrecuente(datosClienteFrecuente)

        this.restaurante = new Restaurante(datoRestaurante)
        
        this.pedido.agregarElemento(this.elementoPedido)
        this.pedido.agregarElemento(this.elementoPedido2)
        this.pedido.agregarElemento(this.elementoPedido2)
    }
    PruebaElementoProducto()
    { 
        console.log(this.elementoPedido.getDescripcion())
    }

    PruebaDireccion()
    { 
        console.log(this.direccion.getFormatoExtendido())
        console.log(this.direccion.getFormatoCorto())
    }

    PruebaCliente(){ 
    console.log(this.cliente.getPerfil())
    }
    PruebaPedido()
    {
        console.log(this.pedido.getResumen())
        console.log(this.pedido.getNumeroElementos())
        console.log(this.pedido.getProductos())
        console.log(this.pedido.getCostoTotal())
        this.pedido.listarElementos()
    }
    PruebaRestaurante()
    {
        this.restaurante.registrarProducto(this.producto)
        this.restaurante.registrarProducto(this.producto2)

        console.log(this.restaurante.registrarPedido(this.pedido))
        console.log(this.restaurante.registrarPedido(this.pedido))

        console.log(this.restaurante.eliminarPedido(this.pedido))

        console.log(this.restaurante.eliminarPedido(this.pedido))

        console.log(this.restaurante.registrarPedido(this.pedido))

        console.log(this.restaurante.modificarPedido(this.pedido, this.pedido2))

        this.restaurante.listarProductos()
        this.restaurante.listarPedidos()
    }
}
let pruebas = new Main()
pruebas.PruebaElementoProducto();
pruebas.PruebaDireccion();
pruebas.PruebaCliente();
pruebas.PruebaPedido();
pruebas.PruebaRestaurante();