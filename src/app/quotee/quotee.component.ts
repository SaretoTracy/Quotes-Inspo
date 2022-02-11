import { Component,  Input, OnInit,  } from '@angular/core';
import { Quotes } from '../quotes';
import { quotes } from '../quoteList';
import { QuoteService } from '../quote-service/quote.service';
@Component({
  selector: 'app-quotee',
  templateUrl: './quotee.component.html',
  styleUrls: ['./quotee.component.css']
})
export class QuoteeComponent implements OnInit {
  
  addNewQuote(quotes: Quotes){
    let quotesLength = this.quote.length;
    quotes.id = quotesLength+1;
    this.quote.push(quotes)
  }
  
  //toogle details
  toggleDetails(index:number){
    this.quote[index].showauthor = !this.quote[index].showauthor;
  }
//delete details
//will be triggered when event is captured
deleteQuote(remove:any, index:number){
  if (remove){
    let alertMessage =confirm("Are you sure you want to delete this Quote?");
    if(alertMessage){
      this.quote.splice(index,1);
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

constructor(quoteservice:QuoteService) {
  this.quotes = quoteservice.getQuotes()

}

  ngOnInit(): void {
  }

}
