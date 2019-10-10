import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../user-details.service';
import { MentorCurrent } from '../mentor-current';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-currenttrainings2',
  templateUrl: './currenttrainings2.component.html',
  styleUrls: ['./currenttrainings2.component.css']
})
export class Currenttrainings2Component implements OnInit {
    mentor:Observable<[MentorCurrent]>;
    username:string;
    
  constructor(private route:ActivatedRoute,private service:UserDetailsService) { }

  public ngOnInit() {
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

  reload() {
    this.mentor=this.service.getMentorCurrentDetails();
  }

}
