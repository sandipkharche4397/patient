import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientserviceService } from 'src/app/service/patientservice.service';

@Component({
  selector: 'app-patient-partial-r',
  templateUrl: './patient-partial-r.component.html',
  styleUrls: ['./patient-partial-r.component.css']
})
export class PatientPartialRComponent {

  constructor(private router:Router,private fb:FormBuilder,private ps:PatientserviceService){}


  
register:FormGroup;
a1:any;
ngOnInit(){
this.a1=new Date();
this.register=this.fb.group({

  
  firstname:['', Validators.required],
  middlename:['',],
  lastname:['',Validators.required],
  age:['',],
  title:['',Validators.required],
  gender:['',Validators.required],
  mobno:['',Validators.required],
  registerdate:[''],   
dob:[],
maritalstatus:[''],
address:[''],
patientType:['',],
opdid:[],
  laddr:[],
   paddr:[],
   cd:[],
   income:[],
   doc:[],
  
    
    drdetails:this.fb.group({
      
	 drname:[''],
	drdept:[''],
	 reffdr:[''],
   ward:[''],
    }),

    // patientrel:this.fb.group({
     
    //   relativename:[],
    //   relativeaddr:[],
    //   relation:[],
    //   mobno:[]
    // }),
})





}







save(){
  if(this.register.value.firstname!=""  &&this.register.value.lastname!="" && this.register.value.title!=null && this.register.value.age!=null && this.register.value.gender!=null && this.register.value.mobno!=null  ){
  alert("Thanks For Register")


  if(this.register.value.patientType=='OPD'){
    this.ps.ragisterp(this.register.value).subscribe();
    this.router.navigateByUrl("/patientRF/patient/opdlist");
  }
  else{
    this.ps.ragisterp(this.register.value).subscribe();
    this.router.navigateByUrl("/patientRF/patient/patientDetails");
  }


  }
else{
  alert("Enter All Data")
}
}





}
