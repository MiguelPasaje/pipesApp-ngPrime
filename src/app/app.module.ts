import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//configuración del locale de la app
import localeEsCo from '@angular/common/locales/es-CO';
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCo);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-CO' //Se establece el idioma por defecto a español (Colombia) 
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
