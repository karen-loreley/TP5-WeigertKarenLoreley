export class Punto1 {
    _id!:string;
     nombre:string;
     descripcion:string;
     imagen:string;
     precio:number;
     stock:number;
     destacado:boolean;
 
     constructor(){
         this.nombre='';
         this.imagen='';
         this.descripcion='';
         this.precio=0;
         this.stock=0;
         this.destacado=false;
     }
}
