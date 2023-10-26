import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRFComponent } from './RegistrationForm/patient-rf/patient-rf.component';
import { HomeComponantComponent } from './Home/home-componant/home-componant.component';
import { SideNavComponent } from './template/side-nav/side-nav.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import {  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-Pagination';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    PatientRFComponent,
    HomeComponantComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    
    
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
NgxPaginationModule ,
NgxPrintModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
