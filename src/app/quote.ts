export class Quote {

  showInfo: boolean;
    constructor(public id: number, public quote: string, public author: string, public user: string,
                public datePosted: Date, public likes: number, public dislike: number )
                {
                  this.showInfo = false;
                }
}
