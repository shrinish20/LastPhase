import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  initial:number=0;
  arrUser: string[];
  public  ngOnInit() {
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
