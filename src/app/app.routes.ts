import { Routes } from '@angular/router';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { SliderComponent } from './components/slider/slider.component';
import { Punto2FormComponent } from './components/punto2-form/punto2-form.component';
import { Punto2listaComponent } from './components/punto2lista/punto2lista.component';
import { Punto3formComponent } from './components/punto3form/punto3form.component';
import { Punto3listComponent } from './components/punto3list/punto3list.component';

export const routes: Routes = [

    {
        path: 'punto1form',
        component:Punto1FormComponent,
    },
    {
        path: 'punto1form/:id',
        component:Punto1FormComponent,
    },
    {
        path:'punto1',
        component:SliderComponent,
    },
    {
        path: 'punto2form',
        component:Punto2FormComponent,
    },
    {
        path: 'punto2form/:id',
        component:Punto2FormComponent,
    },
    {
        path:'punto2',
        component:Punto2listaComponent,
    },
    {
        path: 'punto3form',
        component:Punto3formComponent,
    },
    {
        path: 'punto3form/:id',
        component:Punto3formComponent,
    },
    {
        path:'punto3',
        component:Punto3listComponent,
    }
];
