export default class Precio {
    constructor(valor){
        this._valor = valor
    }
    getPrecio(){
        return "$" + new Intl.NumberFormat("en-US").format(this._valor);
    }
}