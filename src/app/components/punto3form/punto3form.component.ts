import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Punto3 } from '../../model/punto3';
import { ActivatedRoute, Router } from '@angular/router';
import { Punto3Service } from '../../services/punto3.service';
import { Espectador } from '../../model/espectador';
import { EspectadorService } from '../../services/espectador.service';

@Component({
  selector: 'app-punto3form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto3form.component.html',
  styleUrl: './punto3form.component.css'
})
export class Punto3formComponent implements OnInit{

  ticket!:Punto3;
  accion:string="new";
  espectadores!:Array<Espectador>;
  
  ticketId: string | null = null;

  constructor(private activateRouter: ActivatedRoute,
              private service:Punto3Service,
              private espectadorService:EspectadorService,
              private router:Router
  ){
    this.iniciarVariable();
    this.cargarEspectadores();
  }
  
  ngOnInit():void{
    this.activateRouter.params.subscribe(
      params =>{
        this.ticketId = params['id'];
        if(this.ticketId){ 
          this.cargarTicket(this.ticketId);
          this.accion="update";
        }else{
          this.accion = "new";
        }
        });
  }

  registrar():void{
    this.service.add(this.ticket).subscribe(
      result=>{
        if(result.status == 1){
          alert("Ticket guardado correctamente")
        this.router.navigate(['punto3']);
        }
      },
      (error:any)=>{
        console.log(error);
      }
    );
    this.ticket = new Punto3(); 
  }

  iniciarVariable(): void
  {
    this.ticket = new Punto3(); 
  }
  
  cargarTicket(id:string):void{
   this.service.getTicket(id).subscribe(
    (result)=>{
      this.ticket=result; 
    },
    (error:any)=>{
      console.log(error);
    }
   );
  }
  
  actualizar():void{
    if (this.ticket) {
    this.service.update(this.ticket).subscribe(
      (result)=>{
        if(result.status == 1){
          alert("Ticket actualizado correctamente")
        this.router.navigate(['punto3']);
        }
      },
      (error:any)=>{
        console.log(error);
      }
     );} else{
      console.log("No hay ticket para actualizar");
     }
  }

  cargarEspectadores():void{
    this.espectadorService.getEspectadores().subscribe(
      (result)=>
        {
          this.espectadores = result;
        },
      (error:any) => 
        {
          console.log(error);
        }
      );
    }  
    
}