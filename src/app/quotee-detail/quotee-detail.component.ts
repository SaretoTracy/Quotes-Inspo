
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quotee-detail',
  templateUrl: './quotee-detail.component.html',
  styleUrls: ['./quotee-detail.component.css']
})
export class QuoteeDetailComponent implements OnInit {
  //input binding
@Input() quote:any;
@Input() post:any;

  @Output() remove= new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.remove.emit(complete);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
