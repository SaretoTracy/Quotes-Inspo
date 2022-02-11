import { Component,  Input, OnInit,  } from '@angular/core';
import { Quotes } from '../quotes';
import { quotes } from '../quoteList';
import { QuoteService } from '../quote-service/quote.service';
import { AlertService } from '../alert-service/alert.service';
@Component({
  selector: 'app-quotee',
  templateUrl: './quotee.component.html',
  styleUrls: ['./quotee.component.css']
})
export class QuoteeComponent implements OnInit {
 
  addNewQuote(quotes: Quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    this.quotes.push(quotes)
  }
  
  //toogle details
  toggleDetails(index:number){
    this.quotes[index].showauthor = !this.quotes[index].showauthor;
  }
//delete details
//will be triggered when event is captured
deleteQuote(remove:any, index:number){
  if (remove){
    let alertMessage =confirm("Are you sure you want to delete this Quote?");
    if(alertMessage){
      this.quotes.splice(index,1);
      this.alertService.alertMe("The goal has been deleted")
    }
  }
}
@Input() quote:any;

likes:number =0;
upVote(){
  this.likes++;//likes increament
}

dislikes:number =0;
downVote(){
  this.dislikes++;//dislike increment
}


quotes:Quotes[];
alertService:AlertService;

constructor(quoteservice:QuoteService, alertService:AlertService) {
  this.quotes = quoteservice.getQuotes()
  this.alertService = alertService;

}

  ngOnInit(): void {
  }

}
