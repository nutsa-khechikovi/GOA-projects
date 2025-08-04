class Movie {
  constructor(title, director, rating, releaseYear) {
    this.title = title;
    this.director = director;
    this.rating = rating;
    this.releaseYear = releaseYear;
  }
  isHit() {
    return this.rating > 8;
  }
}
const movie1 = new Movie('Inception', 'Christopher Nolan', 8.8, 2010);
const movie2 = new Movie('Some Movie', 'Unknown', 6.5, 2018);
console.log(movie1.isHit());
console.log(movie2.isHit());
