class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    info() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${
            this.isRead ? 'is read' : 'not read yet'
        }.`)
    }
}

const exampleBook = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);

exampleBook.info();