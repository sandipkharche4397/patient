import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { LocalAddress } from '../model/local-address';
import { PermamentAddress } from '../model/permament-address';
import { ContactDetails } from '../model/contact-details';
import { IncomeDetails } from '../model/income-details';
import { PatientDocuments } from '../model/patient-documents';
import { DoctorDetails } from '../model/doctor-details';
import { PatientRelative } from '../model/patient-relative';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  url:String="http://localhost:8080/HospitalManagement-0.0.1-SNAPSHOT";
  getsinglepatient(id: any) {
   
    return this.http.get("http://localhost:8080/HospitalManagement-0.0.1-SNAPSHOT/get/"+id)
  }
  ragisterdeatils(patient:Patient) {
   
    return this.http.put("http://localhost:8080/HospitalManagement-0.0.1-SNAPSHOT/update",patient)
  }
  getregister() {
   
    return this.http.get(this.url+"/get")
    
  }


  constructor(private http:HttpClient) { }

  p:Patient={
    id: 0,
    firstname: '',
    middlename: '',
    lastname: '',
    age: 0,
    title: '',
    gender: '',
    mobno: 0,
    laddr: new LocalAddress,
    paddr: new PermamentAddress,
    cd: new ContactDetails,
    registerdate: undefined,
    income: new IncomeDetails,
    auditby: '',
    enterby: '',
    mrdno: '',
    doc: new PatientDocuments,
    dob: '',
    maritalstatus: '',
    address: '',
    patientType: '',
    drdetails: new DoctorDetails,
    patientrel: new PatientRelative
  }


  ragisterp(p:Patient)
  {
    
return this.http.post("http://localhost:8080/HospitalManagement-0.0.1-SNAPSHOT/save",p)
  }

}
