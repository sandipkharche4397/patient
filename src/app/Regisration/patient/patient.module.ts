import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPartialRComponent } from './patient-partial-r/patient-partial-r.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientRoutingModule } from '../patient-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegistationComponent } from './registation/registation.component';


@NgModule({
  declarations: [
    PatientPartialRComponent,
    PatientDetailsComponent,
    RegistationComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class PatientModule { }
