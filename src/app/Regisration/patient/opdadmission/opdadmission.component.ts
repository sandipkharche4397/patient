import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientserviceService } from 'src/app/service/patientservice.service';

@Component({
  selector: 'app-opdadmission',
  templateUrl: './opdadmission.component.html',
  styleUrls: ['./opdadmission.component.css']
})
export class OPDAdmissionComponent  implements OnInit{
  @ViewChild('content',{static:false}) el!:ElementRef

    constructor(private ps:PatientserviceService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router){}
   
   
    pp:Patient;
    currentDate=new Date();
    opdid:any;
    ngOnInit(): void {
    this.get();
   



}

get(){
  this.ps.getsinglepatient(this.route.snapshot.params['id']).subscribe((p:Patient)=>{
    this.pp=p;
      });
     
}
makepdf()
{

    
  const pdf = new jsPDF('p', 'pt', 'a4');
  const content = this.el.nativeElement;
  
  html2canvas(content).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 550;
    const pageHeight = 1100;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
  
    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
  
    pdf.save('patient.pdf');
  });
  
}
back(){
  this.router.navigateByUrl("/patientRF/patient/opdlist")
}
}