export class Book{
    constructor(
        public id: number,
        public title: string,  
        public numberOfPages: number,           
        public genre: string   
    ){}
}

export class BookUpd{
    constructor(
        public id: number,
        public books: Book[]
    ){}
}
