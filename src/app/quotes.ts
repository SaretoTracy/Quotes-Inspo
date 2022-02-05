export class Quotes {
    showauthor: boolean;//enable toggle between showing and hiding a author description
    
  constructor(public id: number,public quote: string,public author: string){
    this.showauthor=false;
  }
}
