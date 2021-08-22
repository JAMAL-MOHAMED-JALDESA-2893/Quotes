import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Quotes';

  quotes: Quote[] = [
    new Quote(1, 'The way i see it, if you want the rainbow, you gotta put up with rain  ',
    'Dolly Parton', 'Jamal',
    new Date(2021, 7, 20), 0, 0),
    new Quote(2, 'The purpose of our life is to be happy daily', 'Dallai Lama', 'Stoogy',
    new Date(2021, 7, 20), 0, 0),
    new Quote(3, 'Many of life failures are people who did not realise how close they were to success when they gave up', 'Thomas Edison', 'Osiemo',
    new Date(2021 , 7 , 21), 0, 0),
    new Quote(4, 'Not how long, but how well you lived is the man thing',
    'Seneca', 'Tinyash',
    new Date(2021, 7, 21), 0, 0),
    new Quote(5, 'keep calm and carry on',
    'winston Churchill', 'Diri',
    new Date(2021, 7, 22), 0, 0),
    new Quote(6, 'The healtiest response to life is joy',
    'Deepak chopra', 'malka',
    new Date(2021, 7, 22), 0, 0),
    new Quote(6, 'Life is short, enjoy it.',
    'shuke', 'malka',
    new Date(2021, 7, 22), 0, 0),
    new Quote(6, 'keep working',
    'jamal', 'malka',
    new Date(2021, 7, 22), 0, 0),
  ];


  quoteDelete(isRead:any, index:number) {
    if (isRead) {
      let toDelete: boolean = confirm(`COMFIRM IF YOU WANT TO DELETE : ${this.quotes[index].quote}?
             AUTHORED BY:${this.quotes[index].author}
             POSTED BY: ${this.quotes[index].user}`)
      if (toDelete){
        this.quotes.splice(index, 1);
      }

    }
  }
  addNewQuote(quote:any) {
  let quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.completeDate = new Date(quote.completeDate);
  this.quotes.push(quote);
  }

  displayInfo(index:number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
