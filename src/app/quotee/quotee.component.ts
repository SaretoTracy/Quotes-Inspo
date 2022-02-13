import { Component,  Input, OnInit,  } from '@angular/core';
import { Quotes } from '../quotes';
import { quotes } from '../quoteList';
import { QuoteService } from '../quote-service/quote.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';

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

constructor(quoteservice:QuoteService, alertService:AlertService, private http:HttpClient) {
  this.quotes = quoteservice.getQuotes()
  this.alertService = alertService;

}

  ngOnInit(){

    interface ApiResponse{
      writter:string;
      quotess:string;
    }

    this.http.get<ApiResponse>("http://quoets.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.writter, data.quotess)
    }
    ,err=>{
        this.quote = new Quote("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
  }
  }


