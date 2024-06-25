import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Punto2 } from '../../model/punto2';
import { Punto2Service } from '../../services/punto2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punto2lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto2lista.component.html',
  styleUrl: './punto2lista.component.css'
})
export class Punto2listaComponent {
  transaccion!:Array<Punto2>;
  monedaOrigen: string = '';
  monedaDestino: string = '';
  

  constructor(private service: Punto2Service,
              private router: Router
  ){
    this.obtenerTransaccion();
  }

  obtenerTransaccion(){
    this.service.getTransaccion().subscribe(
      data=>{
        this.transaccion= data;
      },
      error=>{
        console.log(error);
      }
    )
  }


  recuperarPorDivisas() {
    if (this.monedaOrigen && this.monedaDestino) {
      this.service.getTransaccionesPorDivisas(this.monedaOrigen, this.monedaDestino).subscribe(
        (data) => {
          this.transaccion = data;
        },
        (error) => {
          console.error('Error al recuperar transacciones por divisas', error);
        }
      );
    } else {
      alert('Por favor, ingrese ambas divisas para filtrar');
    }
  }

  agregar(){
    this.router.navigate(['punto2form',0]);
  }

  modificar(_id:string){
    this.router.navigate(['punto2form', _id]);
  }

  eliminar(id : string){
    this.service.deleteTransaccion(id).subscribe(
      result=>{
        if(result.status == 1){
          alert("transaccion eliminado correctamente")
          this.obtenerTransaccion();
        }
      },
      error=>{
        console.log(error);
      }
    )
    
  }
}
