import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-quotee-detail',
  templateUrl: './quotee-detail.component.html',
  styleUrls: ['./quotee-detail.component.css']
})
export class QuoteeDetailComponent implements OnInit {
  //input binding
  @Input() quote: any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
