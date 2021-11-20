import { AppService } from './app.service';
import { Component, IterableDiffers } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public datepipe:DatePipe,private appservice: AppService){

  }
  title = 'keypad-demo';

  lstKeys: any = [
    { 'no': '1', 'text': '', 'row': '1', 'column': '1' },
    { 'no': '2', 'text': 'ABC', 'row': '1', 'column': '2' },
    { 'no': '3', 'text': 'DEF', 'row': '1', 'column': '3' },
    { 'no': '4', 'text': 'GHI', 'row': '2', 'column': '1' },
    { 'no': '5', 'text': 'JKL', 'row': '2', 'column': '2' },
    { 'no': '6', 'text': 'MNO', 'row': '2', 'column': '3' },
    { 'no': '7', 'text': 'PQRS', 'row': '3', 'column': '1' },
    { 'no': '8', 'text': 'TUV', 'row': '3', 'column': '2' },
    { 'no': '9', 'text': 'WXYZ', 'row': '3', 'column': '3' },
    { 'no': '*', 'text': '', 'row': '4', 'column': '1' },
    { 'no': '0', 'text': '', 'row': '4', 'column': '2' },
    { 'no': '#', 'text': '', 'row': '4', 'column': '3' },

  ];

  lstKeyStrokeHistory: any= [];

  ngOnInit() {
    this.lstKeyStrokeHistory = this.appservice.fetchKeyStrokeHistory();
  }

  keyClick(item: any): void {
    this.lstKeyStrokeHistory.push({
      'no':item.no, 'time':this.datepipe.transform(new Date(),'HH:mm:ss'), 'coordinate':'['+item.row+','+item.column+']'
    });
    console.log(this.lstKeyStrokeHistory);
   this.appservice.saveKeyStrokeHistory(this.lstKeyStrokeHistory);
  }

  fetchKeyStrokeHistory(): any{

    return this.appservice.fetchKeyStrokeHistory();
  }

  clearKeyStrokeHistory(): void{
    this.lstKeyStrokeHistory = [];
    this.appservice.clearKeyStrokeHistory();
  }
}


