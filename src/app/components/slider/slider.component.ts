import { Component } from '@angular/core';
import { Punto1 } from '../../model/punto1';
import { Punto1Service } from '../../services/punto1.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  productos!:Array<Punto1>;
  productosDestacados!:Array<Punto1>;

  constructor(private punto1service: Punto1Service,
              private router: Router
  ){
    
    this.obtenerProducto();
    this.recuperarDestacados();
  }

  obtenerProducto(){
    //this.expedientes=this.expedienteservice.getExpediente();
    this.punto1service.getProducto().subscribe(
      data=>{
        this.productos= data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  agregar(){
    this.router.navigate(['punto1form',0]);
  }

  modificar(_id:string){
    this.router.navigate(['punto1form', _id]);
  }

  eliminar(id : string){
    this.punto1service.deleteProducto(id).subscribe(
      result=>{
        if(result.status == 1){
          alert("producto eliminado correctamente")
          this.obtenerProducto();
          this.recuperarDestacados();
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  recuperarDestacados(){
    this.punto1service.productosdestados().subscribe(
      data=>{
        this.productosDestacados= data;
      },
      error=>{
        console.log(error);
      }
    )
  }
}
