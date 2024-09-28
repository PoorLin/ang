import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import e from 'express';
import { SqrtPipe } from '../app.sqrt';
import { MyDateService } from '../my-date.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule,SqrtPipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
  constructor(private myDateService:MyDateService){
     this.todaydate = myDateService.showTodayDate();
  }

  ngOnInit(): void {
    
  }
title = "最新消息";
months = ["January","Feb","March","Aprill","May","June","July","August","Septemer","October","Novermber","December"];
isAvailable =true;
monthSelected = '請選擇';
todaydate:any;
myClickFunction(event:any){
if(this.isAvailable){
  this.isAvailable = false;
}else{
  this.isAvailable = true;
}
}
changeMonths(event:any){
  console.log(event.target.value)
  this.monthSelected = event.target.value
}

}
