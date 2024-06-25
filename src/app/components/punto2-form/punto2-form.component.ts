import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Punto2 } from '../../model/punto2';
import { ActivatedRoute, Router } from '@angular/router';
import { Punto2Service } from '../../services/punto2.service';

@Component({
  selector: 'app-punto2-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './punto2-form.component.html',
  styleUrl: './punto2-form.component.css'
})
export class Punto2FormComponent {
  transaccion!:Punto2;
  accion:string="new";
  conversionResult: any;

  constructor(private activateRouter: ActivatedRoute,
              private punto2service:Punto2Service,
              private router:Router
  ){
    this.iniciarvariable();
  }

  ngOnInit():void{
    this.activateRouter.params.subscribe(params=>{
      if(params['id']=="0"){
        this.accion ="new";
        this.iniciarvariable();
      }else{
        this.accion="update";
        this.cargarTransaccion(params['id']);
      }
    });
  }

  iniciarvariable():void{
    this.transaccion= new Punto2();
  }

  registrar():void{
    this.punto2service.add(this.transaccion).subscribe(
      (result)=>{
        if(result.status == 1){
          alert("Transaccion guardado correctamente")
        this.router.navigate(['punto2']);
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
    this.transaccion = new Punto2();
  }

  cargarTransaccion(_id:string):void{
   this.punto2service.getTransaccionById(_id).subscribe(
    (result)=>{
      //this.expediente=result;
      Object.assign(this.transaccion, result);
    },
    (error:any)=>{
      console.log(error);
    }
   );
  }

  actualizar():void{
    this.punto2service.update(this.transaccion).subscribe(
      (result)=>{
        if(result.status == 1){
          alert("Transaccion actualizado correctamente")
        this.router.navigate(['punto2']);
        }
      },
      (error:any)=>{
        console.log(error);
      }
     );
     this.transaccion=new Punto2();
  }

  convertCurrency() {
    this.punto2service.convertCurrency(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.cantidadOrigen).subscribe(
      response => {
        this.conversionResult = response.result;
        this.transaccion.cantidadDestino=response.result;
        console.log(this.conversionResult);
      },
      error => {
        console.error(error);
      }
    );
  }

}
