class Movie {
    constructor(title, year, genres) {
      this.title = title;
      this.year = year;
      this.genres = genres;
    }
  }
  
  function sortByRecentYear(movies) {
    return movies.slice().sort((a, b) => b.year - a.year);
  }
  
  function removeLeadingArticles(title) {
    return title.replace(/^(A|An|The)\s+/i, '').trim(); //here im using regular expression as the first argument and i will replace it withe the second argument
  }
  
  function sortByTitle(movies) {
    return movies.slice().sort((a, b) => {
      const titleA = removeLeadingArticles(a.title);
      const titleB = removeLeadingArticles(b.title);
      return titleA.localeCompare(titleB); // localCompare here is a built-in method in javaScript to compare between two strings
    });
  }
  
  const movies = [
    new Movie("The Avengers", 2012, ["Action", "Sci-Fi"]),
    new Movie("An Inception", 2010, ["Action", "Sci-Fi"]),
    new Movie("A Titanic", 1997, ["Drama", "Romance"]),
    new Movie("Batman Begins", 2005, ["Action", "Adventure"]),
  ];
  
  
  const sortedByRecentYear = sortByRecentYear(movies);
  const sortedByTitle = sortByTitle(movies);
  
  console.log("Sorted by recent year:");
  console.log(sortedByRecentYear.map(movie => `${movie.title} (${movie.year})`).join('\n'));
  
  console.log("\nSorted by title (ignoring articles):");
  console.log(sortedByTitle.map(movie => `${movie.title} (${movie.year})`).join('\n'));
  
  module.exports={

        Movie,
        sortByRecentYear,
        removeLeadingArticles,
        sortByTitle,
      };
