import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPartialRComponent } from './patient/patient-partial-r/patient-partial-r.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';

const routes: Routes = [
  {
path:'patientpatial',component:PatientPartialRComponent
  },
  {
    path:'patientDetails',component:PatientDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
