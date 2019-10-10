import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';
import { UserDetails } from '../user-details';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationValidator } from '../validators/must-match.validator';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  user:UserDetails;
  constructor(private router:Router,private userservice:UserDetailsService,private formBuilder: FormBuilder) { 
    this.user = new UserDetails();
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      useremail:['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });
   }  
  ngOnInit() {
  }


  register(){
 
  this.userservice.saveUser(this.user).subscribe();
  this.router.navigate(['/userlogin']);
}

}
