function filterBooksByYear(books) {
  // Filter books published after 2010
  const filteredBooks = books.filter((book) => book.year > 2010);

  // Capitalize author names in the filtered books
  const capitalizedBooks = filteredBooks.map((book) => {
    return {
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year,
    };
  });

  return capitalizedBooks;
}

// Example usage
const books = [
  { title: "Book 1", author: "Author 1", year: 2008 },
  { title: "Book 2", author: "Author 2", year: 2012 },
  { title: "Book 3", author: "Author 3", year: 2015 },
  { title: "Book 4", author: "Author 4", year: 2009 },
];

const filteredAndCapitalizedBooks = filterBooksByYear(books);
console.log(filteredAndCapitalizedBooks);
