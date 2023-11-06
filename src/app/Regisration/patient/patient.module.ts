import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPartialRComponent } from './patient-partial-r/patient-partial-r.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientRoutingModule } from '../patient-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegistationComponent } from './registation/registation.component';
import { NgxPaginationModule } from 'ngx-Pagination';
import { OPDComponent } from './opd/opd.component';
import { OPDListComponent } from './opdlist/opdlist.component';
import { OPDAdmissionComponent } from './opdadmission/opdadmission.component';
import { OPDBillingComponent } from './opdbilling/opdbilling.component';
import { NgxPrintModule } from 'ngx-print';
import { IPDAdmComponent } from './ipdadm/ipdadm.component';
import { IpdbillingComponent } from './ipdbilling/ipdbilling.component';

@NgModule({
  declarations: [
    PatientPartialRComponent,
    PatientDetailsComponent,
    RegistationComponent,
    OPDComponent,
    OPDListComponent,
    OPDAdmissionComponent,
    OPDBillingComponent,
    IPDAdmComponent,
    IpdbillingComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
 NgxPaginationModule  ,
 NgxPrintModule
  ]
})
export class PatientModule { }
