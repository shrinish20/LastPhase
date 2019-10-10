import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { Usercompleted } from '../usercompleted';
import { UserDetailsService } from '../user-details.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-completedtrainings',
  templateUrl: './completedtrainings.component.html',
  styleUrls: ['./completedtrainings.component.css']
})
export class CompletedtrainingsComponent implements OnInit {
  userCompleted:Observable<[Usercompleted]>;
  completed:string[];
  username:string;
  constructor(private service: UserDetailsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('id');
    this.reload();
    $(function() {

      $(".progress").each(function() {
      
        var value = $(this).attr('id');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');
      
        if (value > 0) {
          if (value <= 50) {
            right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
          } else {
            right.css('transform', 'rotate(180deg)')
            left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
          }
        }
      
      })
      
      function percentageToDegrees(percentage) {
      
        return percentage / 100 * 360
      
      }
      });
  }
  reload(){
    this.userCompleted = this.service.getUserCurrentDetails();
  }


}
