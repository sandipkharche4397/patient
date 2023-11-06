import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPartialRComponent } from './patient/patient-partial-r/patient-partial-r.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { OPDComponent } from './patient/opd/opd.component';
import { OPDListComponent } from './patient/opdlist/opdlist.component';
import { OPDAdmissionComponent } from './patient/opdadmission/opdadmission.component';
import { OPDBillingComponent } from './patient/opdbilling/opdbilling.component';
import { IPDAdmComponent } from './patient/ipdadm/ipdadm.component';
import { IpdbillingComponent } from './patient/ipdbilling/ipdbilling.component';

const routes: Routes = [
  {
path:'patientpatial',component:PatientPartialRComponent
  },
  {
    path:'patientDetails',component:PatientDetailsComponent
  },
  {
    path:'opd',component:OPDComponent
  },
  {
    path:'opdlist',component:OPDListComponent
  },
  {
    path:'opdAdm',component:OPDAdmissionComponent
  },
  {
    path:'ipdAdm/:id',component:IPDAdmComponent
  }
,
{

  path:"opdBill/:id",component:OPDBillingComponent
    },
    {

      path:"ipdBill/:id",component:IpdbillingComponent
        }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
