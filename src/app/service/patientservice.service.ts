import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { LocalAddress } from '../model/local-address';
import { PermamentAddress } from '../model/permament-address';
import { ContactDetails } from '../model/contact-details';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  ragisterdeatils(p:Patient) {
    return this.http.put("http://localhost:8124/update",p)
  }
  getregister(firstname,mobno) {
   
    return this.http.get("http://localhost:8124/get/"+firstname+"/"+mobno)
    
  }


  constructor(private http:HttpClient) { }

  p:Patient={
    id: 0,
    firstname: '',
    middlename: '',
    lastname: '',
    dob: 0,
    title: '',
    gender: '',
    mobno: 0,
    laddr: new LocalAddress,
    paddr: new PermamentAddress,
    cd: new ContactDetails
  }


  ragisterp(p:Patient)
  {
    
return this.http.post("http://localhost:8124/save",p)
  }
}
