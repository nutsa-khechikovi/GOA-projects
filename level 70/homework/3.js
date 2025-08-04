function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  if (typeof year === 'number' && title.length >= 3) {
    console.log(`The book name is ${title} its author is ${author} and the book was released in ${year}`);
  } else {
    console.error('Error: Invalid book data');
  }
}
const book1 = new Book('JS Guide', 'John Doe', 2021, 'Programming');
const book2 = new Book('AI', 'Jane Smith', 'not a year', 'Tech');
