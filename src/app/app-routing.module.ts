import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlandingpageComponent } from './adminlandingpage/adminlandingpage.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { MentorlandingpageComponent } from './mentorlandingpage/mentorlandingpage.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { Completedtrainings2Component } from './completedtrainings2/completedtrainings2.component';
import { CurrenttrainingsComponent } from './currenttrainings/currenttrainings.component';
import { Currenttrainings2Component } from './currenttrainings2/currenttrainings2.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { MentorpaymentsComponent } from './mentorpayments/mentorpayments.component';
import { MentoreditskillsComponent } from './mentoreditskills/mentoreditskills.component';
import { AdminblockComponent } from './adminblock/adminblock.component';


const routes: Routes = [
  {path: '', component: UserloginComponent},
  {path: 'userlogin' , component: UserloginComponent},
  {path: 'usersignup', component: UsersignupComponent},
  {path: 'mentorlogin', component: MentorloginComponent},
  {path: 'mentorsignup', component: MentorsignupComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'admindashboard', component: AdminlandingpageComponent},
  {path: 'userdashboard', component: UserlandingpageComponent},
  {path: 'mentordashboard', component: MentorlandingpageComponent},
  {path: 'searchresult', component: SearchresultsComponent},
  {path: 'completedtrainings', component: CompletedtrainingsComponent},
  {path: 'completedtrainings1', component: Completedtrainings2Component},
  {path: 'currenttrainings', component: CurrenttrainingsComponent},
  {path: 'currenttrainings1', component: Currenttrainings2Component},
  {path: 'profile', component: TrainerprofileComponent},
  {path: 'paymenthistory', component: PaymenthistoryComponent},
  {path: 'mentorpayments', component: MentorpaymentsComponent},
  {path: 'mentoreditskills', component: MentoreditskillsComponent},
  {path: 'adminblock', component: AdminblockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
