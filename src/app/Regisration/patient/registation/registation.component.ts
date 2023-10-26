import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientserviceService } from 'src/app/service/patientservice.service';

// (pdfMake as any).vfs=pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit{

@ViewChild('content',{static:false}) el!:ElementRef

  constructor(private ps:PatientserviceService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router){}
  selected:string="yes";
  patient:FormGroup;
  pp:Patient;
  ngOnInit(): void {
   
this.ps.getsinglepatient(this.route.snapshot.params['id']).subscribe((p:Patient)=>{
this.pp=p;

this.patient.controls['lastname'].setValue(this.pp.lastname);
this.patient.controls['id'].setValue(this.pp.id);
this.patient.controls['title'].setValue(this.pp.title);
this.patient.controls['firstname'].setValue(this.pp.firstname);
this.patient.controls['middlename'].setValue(this.pp.middlename);
this.patient.controls['age'].setValue(this.pp.age);
this.patient.controls['gender'].setValue(this.pp.gender);
this.patient.controls['mobno'].setValue(this.pp.mobno);
this.patient.controls['registerdate'].setValue(this.pp.registerdate);

    })

    


  this.patient=this.fb.group({
    id:[],
      firstname:['',Validators.required],
      middlename:['',Validators.required],
      lastname:['',Validators.required],
      dob:[''],
      title:['',Validators.required],
      gender:['',Validators.required],
      mobno:['',Validators.required],
      registerdate:[''],
      auditby:['',],
      enterby:['',],
      mrdno:[''],
      age:[''],
      
    
      laddr:this.fb.group({
        flatno:['',],
        village:['',],
        landmark:['',],
       postOffice:['',],
        taluka:['',],
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
      }),
      income:this.fb.group({
        paybill:[''],
        companyname:[''],
        consaltantname:[''],
        nameofRepresentative:[''],
        realationToPatient:[''],
      })  ,
      doc:this.fb.group({
       
        aadhaar:[''],
        pan:[''],
        driving:[''],
        election:[''],
        passport:[''],
      })
    })
   
  }


  count:number=0;
  company(){
this.count=this.count+1;


  }


save(){
  alert("Registration successfully")
  
  this.ps.ragisterdeatils(this.patient.value).subscribe();
  // let docdef={
  
  //   content:[
  //     this.patient.value.id,
  //     'Admission Form',
  //     'patient name=', this.patient.value.firstname,
  //   ] 
  // };
  // pdfMake.createPdf(docdef).open();




  this.router.navigateByUrl("patientRF");
}
makepdf(){
 
//   let pdf=new jsPDF('p','pt','a4');

//   pdf.html(this.el.nativeElement,{
//     callback:(pdf)=>{
// pdf.save("adm.pdf");
//     }
//   })

}
}


