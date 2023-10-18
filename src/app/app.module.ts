import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRFComponent } from './RegistrationForm/patient-rf/patient-rf.component';
import { HomeComponantComponent } from './Home/home-componant/home-componant.component';
import { SideNavComponent } from './template/side-nav/side-nav.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
