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
title:string="select"
ngOnInit(){
this.a1=new Date();
this.register=this.fb.group({

  
  firstname:['', Validators.required],
  middlename:['',Validators.required],
  lastname:['',Validators.required],
  age:['',],
  title:['',Validators.required],
  gender:['',Validators.required],
  mobno:['',Validators.required],
  registerdate:[],
   laddr:[],
   paddr:[],
   cd:[],
   income:[],
   doc:[]
    
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
this.router.navigateByUrl("patientRF");
  }
  
}





save(){
  if(this.register.value.firstname!="" && this.register.value.middlename!="" &&this.register.value.lastname!="" && this.register.value.title!=null && this.register.value.age!=null && this.register.value.gender!=null && this.register.value.mobno!=null  ){
  alert("Thanks For Register")

 
this.ps.ragisterp(this.register.value).subscribe();
this.router.navigateByUrl("");}
else{
  alert("Enter All Data")
}
}






}
