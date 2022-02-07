
import { Quote } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
 newQuote= new Quotes(0,"", "",0, 0, "", new Date());
 @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(form:NgForm , data:any){

    if (form.valid) {
      this.addQuote.emit(data);
      form.reset();
    } else {
      alert("Enter name and quote please");
    }
    form.reset()
// this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
