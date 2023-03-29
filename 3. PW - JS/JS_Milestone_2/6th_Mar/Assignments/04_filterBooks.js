const books = [
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'The Girl in Room 105', author: 'Chetan Bhagat', year: 2018 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
    { title: 'Something I Never Told You', author: 'Shravya Bhinder', year: 2014 },
];

const filteredBooks = books.filter(book => book.year < 2010).map(book => {
    let obj = {
        title: book.title,
        author: book.author.toUpperCase()
    }
    return obj 
})

console.log(filteredBooks);