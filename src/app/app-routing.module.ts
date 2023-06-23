
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoInversionistasComponent } from './contacto-inversionistas/contacto-inversionistas.component';
import { GobiernoCorporativoComponent } from './gobierno-corporativo/gobierno-corporativo.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';
import { InformacionInversionistasComponent } from './informacion-inversionistas/informacion-inversionistas.component';
import { InversionistasComponent } from './inversionistas/inversionistas.component';
import { PerfilCorporativoComponent } from './perfil-corporativo/perfil-corporativo.component';
import { InformesSostenibilidadComponent } from './informes-sostenibilidad/informes-sostenibilidad.component';



const routes: Routes = [
  { path: 'ContactoInversionistas', component: ContactoInversionistasComponent },
  { path: 'InformacionFinanciera', component: InformacionFinancieraComponent },
  { path: 'InformacionInversionistas', component: InformacionInversionistasComponent },
  { path: 'Inversionistas', component: InversionistasComponent },
  { path: 'PerfilCorporativo', component: PerfilCorporativoComponent },
  { path: 'GobiernoCorporativo', component: GobiernoCorporativoComponent },
  { path: 'InformesSostenibilidad', component: InformesSostenibilidadComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
