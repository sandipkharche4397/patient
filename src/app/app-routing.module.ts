import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientRFComponent } from './RegistrationForm/patient-rf/patient-rf.component';
import { HomeComponantComponent } from './Home/home-componant/home-componant.component';
// import { PatientpartialRegisterationComponent } from './RegistrationForm/patientpartial-registeration/patientpartial-registeration.component';
// import { PatientFullRegisterationComponent } from './RegistrationForm/patient-full-registeration/patient-full-registeration.component';

const routes: Routes = [
  {
    path:"",component:HomeComponantComponent,
   
    
     
    
  },



  {
     path:"patientRF",component:PatientRFComponent,children:[
       {path:'patient',loadChildren:()=>import('src/app/Regisration/patient/patient.module').then(e=>e.PatientModule)},
       {path:'patientDetails',loadChildren:()=>import('src/app/Regisration/patient/patient.module').then(e=>e.PatientModule)},
      
     ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
