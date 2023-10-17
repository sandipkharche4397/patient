import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-componant',
  templateUrl: './home-componant.component.html',
  styleUrls: ['./home-componant.component.css']
})
export class HomeComponantComponent {

  constructor(private fb:FormBuilder,private router:Router){
  }

  save(){
    localStorage.setItem("userType","patient");
    this.router.navigateByUrl('/patientRF/patient');
  }
}
