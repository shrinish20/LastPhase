import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminlandingpage',
  templateUrl: './adminlandingpage.component.html',
  styleUrls: ['./adminlandingpage.component.css']
})
export class AdminlandingpageComponent implements OnInit {
  initial:number=0;
  username:string;
  arrUser: string[];
  constructor(private httpService: HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('id');
    this.httpService.get('../../assets/json/details.json').subscribe(
      data => {
        this.arrUser = data as string[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  drawTable(){
    this.initial = 1;
  
  }

}
