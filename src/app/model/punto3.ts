import { Espectador } from "./espectador";

export class Punto3 {
    _id!:string;
    precio:number;
    categoriaEspectador:string;
    fechaCompra: string;
    espectador: Espectador;
    
    constructor(){
        this.precio=0;
        this.categoriaEspectador='';
        this.fechaCompra='';
        this.espectador= new Espectador();

    }
}

