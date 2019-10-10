import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { AdminlandingpageComponent } from './adminlandingpage/adminlandingpage.component';
import { MentorlandingpageComponent } from './mentorlandingpage/mentorlandingpage.component';
import { CurrenttrainingsComponent } from './currenttrainings/currenttrainings.component';
import { Currenttrainings2Component } from './currenttrainings2/currenttrainings2.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { Completedtrainings2Component } from './completedtrainings2/completedtrainings2.component';
import { MentoreditskillsComponent } from './mentoreditskills/mentoreditskills.component';
import { MentorpaymentsComponent } from './mentorpayments/mentorpayments.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { AdminblockComponent } from './adminblock/adminblock.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    MentorloginComponent,
    UserloginComponent,
    UsersignupComponent,
    MentorsignupComponent,
    UserlandingpageComponent,
    AdminlandingpageComponent,    
    MentorlandingpageComponent,    
    CurrenttrainingsComponent,    
    Currenttrainings2Component,    
    CompletedtrainingsComponent,    
    Completedtrainings2Component,    
    MentoreditskillsComponent,    
    MentorpaymentsComponent,    
    PaymenthistoryComponent,    
    TrainerprofileComponent,    
    SearchresultsComponent,    
    AdminblockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
