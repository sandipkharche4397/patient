import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPartialRComponent } from './patient-partial-r/patient-partial-r.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientRoutingModule } from '../patient-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [
    PatientPartialRComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PatientModule { }
