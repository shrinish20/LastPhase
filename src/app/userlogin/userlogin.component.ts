import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { UserDetailsService } from '../user-details.service';
import { Userlogin } from '../userlogin';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user:Userlogin = new Userlogin();
  formdata:FormGroup
  constructor(private router: Router,private service: UserDetailsService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(4)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 4) {
       return {"passwd" : true};
    }
 }
  userlogin(data){
      this.service.getUser(data.uname).subscribe(value =>{this.user=value})
      if(this.user.password==data.passwd){
        if(this.user.role.id==1){
          this.router.navigate(['userdashboard',{id:data.uname}])
        }
        if(this.user.role.id == 2)
        {
          this.router.navigate(['mentordashboard',{ id: data.uname}])
        }
        if(this.user.role.id == 3)
        {
          this.router.navigate(['admindashboard'])
        }
        
      

  }
}

}
