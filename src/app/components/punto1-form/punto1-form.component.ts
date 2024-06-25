import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Punto1 } from '../../model/punto1';
import { ActivatedRoute, Router } from '@angular/router';
import { Punto1Service } from '../../services/punto1.service';

@Component({
  selector: 'app-punto1-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto1-form.component.html',
  styleUrl: './punto1-form.component.css'
})
export class Punto1FormComponent {

  producto!:Punto1;
  accion:string="new";

  constructor(private activateRouter: ActivatedRoute,
              private punto1service:Punto1Service,
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
        this.cargarProducto(params['id']);
      }
    });
  }

  iniciarvariable():void{
    this.producto= new Punto1();
  }

  registrar():void{
    this.punto1service.add(this.producto).subscribe(
      (result)=>{
        if(result.status == 1){
          alert("producto guardado correctamente")
        this.router.navigate(['punto1']);
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
    this.producto = new Punto1();
    
  }

  cargarProducto(_id:string):void{
   this.punto1service.getProductoById(_id).subscribe(
    (result)=>{
      //this.expediente=result;
      Object.assign(this.producto, result);
    },
    (error:any)=>{
      console.log(error);
    }
   );
  }

  actualizar():void{
    this.punto1service.update(this.producto).subscribe(
      (result)=>{
        if(result.status == 1){
          alert("producto actualizado correctamente")
        this.router.navigate(['punto1']);
        }
      },
      (error:any)=>{
        console.log(error);
      }
     );
     this.producto=new Punto1();
  }

}

