

import { Component, ElementRef, ViewChild } from '@angular/core';
import { PatientserviceService } from "src/app/service/patientservice.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Patient } from "src/app/model/patient";

class Product{
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

  products: Product[] = [];
  additionalDetails: string;
}

@Component({
  selector: 'app-opdbilling',
  templateUrl: './opdbilling.component.html',
  styleUrls: ['./opdbilling.component.css']
})
export class OPDBillingComponent {

    constructor(private ps:PatientserviceService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router){
     
    }
   

    step:number=0;
    invoice = new Invoice(); 
    total:any;
    payment:any;
    cashier:any;
    billno:any;
    phmid:any
    currentDate=new Date();
    pp:Patient;
    
    ngOnInit(): void {
    this.get();
    this.invoice.products.push(new Product());
   

}

get(){
  this.ps.getsinglepatient(this.route.snapshot.params['id']).subscribe((p:Patient)=>{
    this.pp=p;
      });
     
}

  save(){
    this.total = this.invoice.products.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2);
    this.step=this.step+1;
    

  }

back(){
  this.router.navigateByUrl("/patientRF/patient/opdlist")
}

 generatePDF() {
    

}

addProduct(){
 
  this.invoice.products.push(new Product());
}



}
