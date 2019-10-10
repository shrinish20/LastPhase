import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mentordetails } from '../mentordetails';
import { UserDetailsService } from '../user-details.service';
@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {
  // usr_end_time:string
  // usr_start_time:string
  // stack:string
  // url:string
  // exp:string
  // Password:string
  // Password1:string
  // mail:string
  // Number:string
  // Name:string
  // Name1:string
  // invalid:string
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  mentor:Mentordetails;
  constructor(private router:Router,private service:UserDetailsService,private formBuilder: FormBuilder) { 
    this.mentor= new Mentordetails()
    this.passwordFormGroup = this.formBuilder.group({
     
      repeatPassword: ['', Validators.required]
    });
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      linked:['', Validators.required],
      contact:['', Validators.required],
      experience:['', Validators.required],
      
      passwordFormGroup: this.passwordFormGroup
    });
  }

  ngOnInit() {
  }
  register(){
   
    this.service.saveMentor(this.mentor).subscribe();
      this.router.navigate(['/mentorlogin']);
  
}

}
