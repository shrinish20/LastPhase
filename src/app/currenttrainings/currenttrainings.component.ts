import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { Usercurrent } from '../usercurrent';
import { UserDetailsService } from '../user-details.service';
@Component({
  selector: 'app-currenttrainings',
  templateUrl: './currenttrainings.component.html',
  styleUrls: ['./currenttrainings.component.css']
})
export class CurrenttrainingsComponent implements OnInit {
  userCurrent:Observable<[Usercurrent]>;
  username:string;
  constructor(private service:UserDetailsService) { }

  public ngOnInit() {
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
    this.userCurrent = this.service.getUserCurrentDetails();
  }

}
