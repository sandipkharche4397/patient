import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
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
    mobno: 0
  }


  ragisterp(p:Patient)
  {
    
return this.http.post("http://localhost:8124/save",p)
  }
}
