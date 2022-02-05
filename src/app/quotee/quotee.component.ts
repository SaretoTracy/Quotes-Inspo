import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotee',
  templateUrl: './quotee.component.html',
  styleUrls: ['./quotee.component.css']
})
export class QuoteeComponent implements OnInit {
  quotes: Quotes[] = [
   new Quotes(1, "never give up"),
   new Quotes(2, "keep up")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
