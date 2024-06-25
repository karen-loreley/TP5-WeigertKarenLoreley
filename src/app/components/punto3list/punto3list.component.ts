import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Punto3 } from '../../model/punto3';
import { Punto3Service } from '../../services/punto3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punto3list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto3list.component.html',
  styleUrl: './punto3list.component.css'
})
export class Punto3listComponent{
  listapunto3!:Array<Punto3>;
  categoriaEspectador: string = '';

  constructor(private punto3service: Punto3Service,
              private router: Router
  ){
    this.obtenerTickets();
  }
  
  ngOnInit(): void {
    this.obtenerTickets();
  }

  obtenerTickets(){
    this.punto3service.getTickets().subscribe(
      data=>{
        this.listapunto3= data;
        console.log(this.listapunto3);
      },
      error=>{
        console.log(error);
      }
    );
  }

  agregar():void{
    this.router.navigate(['punto3form']);
  }
  
  modificar(_id:string | undefined){
    console.log(_id);
    if (_id) {
      this.router.navigate(['punto3form', _id]);
    } else {
      console.error('ID inválido para modificar el ticket');
    }
  }
  
  eliminar(id : string):void{
    this.punto3service.deleteTicket(id).subscribe(
      result=>{
        if(result.status == 1){
          alert("ticket eliminado correctamente")
          this.obtenerTickets();
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

  filtrarPorCategoria(): void {
    if (this.categoriaEspectador) {
      this.punto3service.getEspectador(this.categoriaEspectador).subscribe(
          data => {
            this.listapunto3 = data;
            console.log(this.listapunto3);
          },
          error => {
            console.log(error);
          }
        );
    } else {
      this.obtenerTickets();
    }
  }
}