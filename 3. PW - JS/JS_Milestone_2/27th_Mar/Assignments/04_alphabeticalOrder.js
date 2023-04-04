function alphabeticalOrder(books) {
    const arr = books.map((obj) => {
        return obj.title
    })

    console.log(arr.sort())
}

const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813
    }
];

alphabeticalOrder(books)

