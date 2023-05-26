import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoInversionistasComponent } from './contacto-inversionistas/contacto-inversionistas.component';
import { GobiernoCorporativoComponent } from './gobierno-corporativo/gobierno-corporativo.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoInversionistasComponent,
    GobiernoCorporativoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
