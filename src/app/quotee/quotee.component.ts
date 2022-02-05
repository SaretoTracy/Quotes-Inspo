import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotee',
  templateUrl: './quotee.component.html',
  styleUrls: ['./quotee.component.css']
})
export class QuoteeComponent implements OnInit {
  quotes: Quotes[] = [
   new Quotes(1, "When you have a dream, you’ve got to grab it and never let go","Author:Carol Burnest"),
   new Quotes(2, "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box", "Author:Duchess Megan"),
   new Quotes(3, "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.", "Author:Taylor Swift")
  ];
  //toogle details
  toggleDetails(index:number){
    this.quotes[index].showauthor = !this.quotes[index].showauthor;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
