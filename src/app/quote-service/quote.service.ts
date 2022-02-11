import { Injectable } from '@angular/core';
import { quotes } from '../quoteList';
import { Quotes } from '../quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
getQuotes(){
return quotes
}
  constructor() { }
}
