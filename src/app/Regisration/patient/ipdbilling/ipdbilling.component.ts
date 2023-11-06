import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientserviceService } from 'src/app/service/patientservice.service';


class Product{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}

class Medical{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}

class Nursing{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}

class Pathology{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}

class Administration{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}

class Bed{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}

class Bio{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}
class Consulatation{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}
class Equipment{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}
class Hospitalcharges{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}

class Radiology{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}
class Othercharges{
  sr:string;
  name: string;
  price: number;
  qty: number;
  total:number;
}
class Invoice{
  customerName: string;
  address: string;
  contactNo: number;
  email: string;

  bed:Bed[]=[];
  bio:Bio[]=[];
  radiology:Radiology[]=[




  ];
  othercharges:Othercharges[]=[];
  consulatation:Consulatation[]=[];
  equipment:Equipment[]=[];
  hospitalcharges:Hospitalcharges[]=[];
  administration:Administration[]=[];
  pathology:Pathology[]=[];
  nursing:Nursing[]=[];
  medical:Medical[]=[];
  products: Product[] = [];
  additionalDetails: string;
}

@Component({
  selector: 'app-ipdbilling',
  templateUrl: './ipdbilling.component.html',
  styleUrls: ['./ipdbilling.component.css']
})

export class IpdbillingComponent {


  constructor(private ps:PatientserviceService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router){
     
  }
 
hospitalservicetotal:any;
medicalAttendencetotal:any;
nursingtotal:any;
pathologytotal:any;
administrationtotal:any;
bedtotal:any;
biototal:any;
consulatationtotal:any;
equipmenttotal:any;
hospitalchargestotal:any;
radiologytotal:any;
othertotal:any;


  step:number=0;
  invoice = new Invoice(); 
  total:any;
  total1:number;
  payment:any;
  cashier:any;
  billno:any;
  phmid:any
  currentDate=new Date();
  pp:Patient;
  
  ngOnInit(): void {
  this.get();
  this.invoice.products.push(new Product());
 
  // this.invoice.medical.push(new Medical());

  // this.invoice.nursing.push(new Nursing());

  // this.invoice.pathology.push(new Pathology());

  // this.invoice.administration.push(new Administration());

  // this.invoice.bed.push(new Bed());


  



}

get(){
this.ps.getsinglepatient(this.route.snapshot.params['id']).subscribe((p:Patient)=>{
  this.pp=p;
    });
   
}
a:number;
b:number;
c:number;
d:number;
e:number;
f:number;
g:number;
h:number;
i:number;
j:number;
k:number;
l:number;


save(){
  
  this.hospitalservicetotal = this.invoice.products.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.medicalAttendencetotal = this.invoice.medical.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.nursingtotal = this.invoice.nursing.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.pathologytotal = this.invoice.pathology.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.administrationtotal = this.invoice.administration.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.bedtotal = this.invoice.bed.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.biototal = this.invoice.bio.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.consulatationtotal = this.invoice.consulatation.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.equipmenttotal = this.invoice.equipment.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.hospitalchargestotal = this.invoice.hospitalcharges.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.radiologytotal = this.invoice.radiology.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);

  this.othertotal = this.invoice.othercharges.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);


  this.a=Number( this.medicalAttendencetotal )
  this.b=Number( this.hospitalservicetotal )
  this.c=Number( this.nursingtotal )
  this.d=Number( this.pathologytotal )
  this.e=Number( this.administrationtotal )
  this.f=Number( this.bedtotal )
  this.g=Number( this.biototal )
  this.h=Number( this.consulatationtotal )
  this.i=Number( this.equipmenttotal )
  this.j=Number( this.hospitalchargestotal )
  this.k=Number( this.radiologytotal )
  this.l=Number( this.othertotal )

  this.total1=(this.a+this.b+this.c+this.d+this.e+this.f+this.g+this.h+this.i+this.j+this.k+this.l)
  this.step=this.step+1;
}

back(){
this.router.navigateByUrl("/patientRF/patient/opdlist")
}



addProduct(){

this.invoice.products.push(new Product());
}
addmedical(){

  this.invoice.medical.push(new Medical());
  }

  addnursing(){
    this.invoice.nursing.push(new Nursing());

  }

  addpathology(){
    this.invoice.pathology.push(new Pathology());

  }

  addAdmCharges(){
    this.invoice.administration.push(new Administration());

  }


  addbed(){
    this.invoice.bed.push(new Bed());

  }

  addbio(){
    this.invoice.bio.push(new Bio());

  }

  addconsulatation(){
    this.invoice.consulatation.push(new Consulatation());

  }

  addequipment(){
    this.invoice.equipment.push(new Equipment());

  }
  addHospitalCharges(){
    this.invoice.hospitalcharges.push(new Hospitalcharges());

  }

  addradiology(){
    this.invoice.radiology.push(new Radiology());

  }

  addothercharges(){
    this.invoice.othercharges.push(new Othercharges());

  }
}
