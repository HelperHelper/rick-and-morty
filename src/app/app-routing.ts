import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import {DefaultComponent} from './components/default/default.component';


const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'inicio', component: DefaultComponent },
  {path: '**', component: DefaultComponent}
  
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
