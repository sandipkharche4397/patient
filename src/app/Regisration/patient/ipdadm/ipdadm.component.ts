import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientserviceService } from 'src/app/service/patientservice.service';

@Component({
  selector: 'app-ipdadm',
  templateUrl: './ipdadm.component.html',
  styleUrls: ['./ipdadm.component.css']
})
export class IPDAdmComponent {

  constructor(private ps:PatientserviceService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router){}
   
   ip:any;
  pp:Patient;
  ngOnInit(): void {
  this.get();
 



}

get(){
this.ps.getsinglepatient(this.route.snapshot.params['id']).subscribe((p:Patient)=>{
  this.pp=p;
    });
   
}
back(){
this.router.navigateByUrl("/patientRF/patient/patientDetails")
}
}