export class Quotes {
    showauthor: boolean;//enable toggle between showing and hiding a author description

  constructor(public id: number , public quote: string,public author: string, public like:number, public dislike:number,public submission:string ){
    this.showauthor=false;
  }
}
