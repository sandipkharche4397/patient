import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMenu } from 'src/app/model/user-menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  constructor(private router:Router)
  {
    
  }
 type:any;



  a:any;
  userRoles: Array<any> ;
  
  ngOnInit(): void {
   this.type= localStorage.getItem('userType');
       this.userRoles=   UserMenu.userMenu;

       if(this.type=='patient'){
        this.a= " Patient";
       }
       if(this.type=='home'){
        this.a= " home";
       }

       
  }

  navigateTo(path:string)
  {
 
    this.router.navigateByUrl('/patientRF/'+this.type+"/"+path)
  }
}

