import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentorlandingpage',
  templateUrl: './mentorlandingpage.component.html',
  styleUrls: ['./mentorlandingpage.component.css']
})
export class MentorlandingpageComponent implements OnInit {
  username:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('id');
  }

}
