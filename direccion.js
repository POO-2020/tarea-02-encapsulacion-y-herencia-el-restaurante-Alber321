export default class Direccion {
    constructor(calle, numE, numI, colonia, cp, ciudad, municipio){
        this._calle = calle
        this._numE = numE
        this._numI = numI
        this._colonia = colonia
        this._cp = cp
        this._ciudad = ciudad 
        this._municipio = municipio
    }
    getFormatoCorto(){
        return (`${this._calle} #${this._numE}`)
    }
    getFormatoExtendido(){
        return (`${this._calle}, #${this._numE}, #${this._numI}, Colonia: ${this._colonia},
        ${this._cp}, ${this._ciudad}, ${this._municipio} `)
    }
}