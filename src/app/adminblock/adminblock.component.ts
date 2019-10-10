import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-adminblock',
  templateUrl: './adminblock.component.html',
  styleUrls: ['./adminblock.component.css']
})
export class AdminblockComponent implements OnInit {
  initial:number=0;
  arrUser: string[];
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
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
