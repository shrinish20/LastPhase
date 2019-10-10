import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlandingpage',
  templateUrl: './userlandingpage.component.html',
  styleUrls: ['./userlandingpage.component.css']
})
export class UserlandingpageComponent implements OnInit {
  initial:number=0;
  arrUser: string[];
  username:string;
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
    $(document).ready(function(){
      $("#js-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table-body tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }
  drawTable(){
    this.initial = 1;
  
  }

}
