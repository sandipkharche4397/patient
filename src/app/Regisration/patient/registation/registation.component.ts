import { Component } from '@angular/core';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent {

  count:number=0;
  company(){
this.count=this.count+1;
  }
}
