import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserDetailsService } from '../user-details.service';
import { Observable } from 'rxjs';
import { MentorCompleted } from '../mentor-completed';
@Component({
  selector: 'app-completedtrainings2',
  templateUrl: './completedtrainings2.component.html',
  styleUrls: ['./completedtrainings2.component.css']
})
export class Completedtrainings2Component implements OnInit {
  mentorCompleted:Observable<[MentorCompleted]>;
  constructor(private service:UserDetailsService) { }

  public ngOnInit() {
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
    this.mentorCompleted = this.service.getUserCurrentDetails();
  }

}
