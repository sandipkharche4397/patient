import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientserviceService } from 'src/app/service/patientservice.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  constructor(private ps:PatientserviceService,private route:Router,private fb:FormBuilder){

  }

  
getregister:FormGroup;
patient:FormGroup;

ngOnInit(){

  
this.getregister=this.fb.group({
  firstname:['', Validators.required],
  mobno:['',Validators.required],
    
}),
this.patient=this.fb.group({
id:[],
  firstname:[''],
  middlename:['',Validators.required],
  lastname:['',Validators.required],
  dob:['',Validators.required],
  title:[],
  gender:['',Validators.required],
  mobno:['',Validators.required],


  

  laddr:this.fb.group({
    flatno:[''],
    village:[''],
    landmark:[''],
   postOffice:[''],
    taluka:[''],
  }),

  paddr:this.fb.group({
    flatno:[''],
    village:[''],
    landmark:[''],
   postOffice:[''],
    taluka:[''],
    district:[''],
    state:[''],
    pincode:[''],
    country:[''],
  }),
  cd:this.fb.group({
    mobileno:[''],
    altmobileno:[''],
    email:[''],
    adhaar:[''],
    pan:[''],
  })
})




const modeldiv=document.getElementById('myModal');
if(modeldiv!=null)
{
modeldiv.style.display='block';
}
}

Closedmodel()
{
  const modeldiv=document.getElementById('myModal');
  if(modeldiv!=null)
  {
modeldiv.style.display='none';
this.route.navigateByUrl("/patinetRF");
  }
}


ppr:Patient;
step:any=1; 

save(){
  
  if(this.step==1){
   
  this.ps.getregister(this.getregister.value.firstname,this.getregister.value.mobno).subscribe((pp:Patient)=>{
  this.ppr=pp;
 
})
}
this.patient.controls['id'].setValue(this.ppr.id);
this.patient.controls['title'].setValue(this.ppr.title);
this.patient.controls['lastname'].setValue(this.ppr.lastname);
this.patient.controls['firstname'].setValue(this.ppr.firstname);
this.patient.controls['middlename'].setValue(this.ppr.middlename);
this.patient.controls['dob'].setValue(this.ppr.dob);
this.patient.controls['gender'].setValue(this.ppr.gender);
this.patient.controls['mobno'].setValue(this.ppr.mobno);


this.step=this.step+1;

if(this.count==1){

  this.flat1=this.getregister.value.flat
  alert(this.flat1)
}

if(this.step==6){
  this.ps.ragisterdeatils(this.patient.value).subscribe();

}
}




flat1:any;
count:any=0;
autofill(){
  if(this.count==0){
  this.count=this.count+1;
  }
  else{
    this.count=this.count-1;
  }
}








}


