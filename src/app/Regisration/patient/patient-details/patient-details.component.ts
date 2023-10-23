import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientserviceService } from 'src/app/service/patientservice.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  title="pagination";
  POSTS:any;
  page:number=1;
  counts:number=0;
  tablesize:number=5;
  tablesizes:any=[5,10,15,20,50]
  constructor(private ps:PatientserviceService,private route:Router,private fb:FormBuilder){

  }
onTablechange(event:any){
  this.page=event;
  this.ngOnInit()
}

onTablesizeChange(event:any){
  this.tablesize=event.target.value;
  this.ngOnInit()
}
 
p:any;
  
 patient:FormGroup;
ppr:Patient[];
ngOnInit(){
   this.ps.getregister().subscribe((pp:Patient[])=>{
   this.ppr=pp;

 })



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
this.route.navigateByUrl("/patientRF/patient");
  }
}



step:any=1; 


save(){
  
for (let p of this.ppr) {
  
  
    
  
this.patient.controls['id'].setValue(this.p.id);
  this.patient.controls['title'].setValue(this.p.title);
  this.patient.controls['lastname'].setValue(this.p.lastname);
  this.patient.controls['firstname'].setValue(this.p.firstname);
  this.patient.controls['middlename'].setValue(this.p.middlename);
  this.patient.controls['dob'].setValue(this.p.dob);
  this.patient.controls['gender'].setValue(this.p.gender);
  this.patient.controls['mobno'].setValue(this.p.mobno);

}




this.step=this.step+1;

if(this.count==1){

  alert(this.flat1)
}

if(this.step==6){
  this.ps.ragisterdeatils(this.patient.value).subscribe();
  alert("patient Details Update Succesfully")
  this.route.navigateByUrl("");
}
}

update(){
  this.step=this.step+1;
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


