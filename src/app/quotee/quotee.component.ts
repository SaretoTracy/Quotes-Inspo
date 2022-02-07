import { Component,  Input, OnInit,  } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotee',
  templateUrl: './quotee.component.html',
  styleUrls: ['./quotee.component.css']
})
export class QuoteeComponent implements OnInit {
  quotes: Quotes[] = [
   new Quotes(1, "When you have a dream, you’ve got to grab it and never let go","Carol Burnest", 0 ,0,"Tracy Sareto",new Date(2022,  6, 6)),
   new Quotes(2, "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box", "Duchess Megan",0, 0,"Tracy Sareto",new Date(2022,  6, 6, 12, 49, 10)),
   new Quotes(3, "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.", "Taylor Swift",0,0,"Tracy Sareto",new Date(2022,  6, 6, 12, 49, 10))
  ];
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
    }
  }
}
@Input() quote:any;

likes:number =0;
dislikes:number =0;

upVote(){
  this.likes++;//likes increament
}
downVote(){
  this.dislikes++;//dislike increment
}


  constructor() { }

  ngOnInit(): void {
  }

}
