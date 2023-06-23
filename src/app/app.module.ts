import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoInversionistasComponent } from './contacto-inversionistas/contacto-inversionistas.component';
import { GobiernoCorporativoComponent } from './gobierno-corporativo/gobierno-corporativo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';
import { InformacionInversionistasComponent } from './informacion-inversionistas/informacion-inversionistas.component';
import { InformesSostenibilidadComponent } from './informes-sostenibilidad/informes-sostenibilidad.component';
import { PerfilCorporativoComponent } from './perfil-corporativo/perfil-corporativo.component';
import { InversionistasComponent } from './inversionistas/inversionistas.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactoInversionistasComponent,
    GobiernoCorporativoComponent,
    InformacionFinancieraComponent,
    InformacionInversionistasComponent,
    InformesSostenibilidadComponent,
    PerfilCorporativoComponent,
    InversionistasComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
