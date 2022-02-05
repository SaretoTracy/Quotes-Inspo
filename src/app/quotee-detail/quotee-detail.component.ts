import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotee-detail',
  templateUrl: './quotee-detail.component.html',
  styleUrls: ['./quotee-detail.component.css']
})
export class QuoteeDetailComponent implements OnInit {
  //input binding
  @Input() quote: any;
  
//output property binding
@Output() isComplete = new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit(): void {
  }

}
