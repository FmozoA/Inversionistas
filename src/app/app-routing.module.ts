
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoInversionistasComponent } from './contacto-inversionistas/contacto-inversionistas.component';
import { GobiernoCorporativoComponent } from './gobierno-corporativo/gobierno-corporativo.component';



const routes: Routes = [
  { path: 'ContactoInversionistas', component: ContactoInversionistasComponent },
  { path: 'GobiernoCorporativo', component: GobiernoCorporativoComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
