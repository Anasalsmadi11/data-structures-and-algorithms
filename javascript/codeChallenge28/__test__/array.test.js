const { Movie, sortByRecentYear, removeLeadingArticles, sortByTitle } = require('../index'); 

describe('Movie Sorting Functions', () => {
  const movies = [
    new Movie("The Avengers", 2012, ["Action", "Sci-Fi"]),
    new Movie("An Inception", 2010, ["Action", "Sci-Fi"]),
    new Movie("A Titanic", 1997, ["Drama", "Romance"]),
    new Movie("Batman Begins", 2005, ["Action", "Adventure"]),
  ];

  it('should sort movies by most recent year first', () => {
    const sortedByRecentYear = sortByRecentYear(movies);
    expect(sortedByRecentYear[0].year).toBe(2012);
    expect(sortedByRecentYear[3].year).toBe(1997);
  });

  it('should sort movies alphabetically by title', () => {
    const sortedByTitle = sortByTitle(movies);
    expect(sortedByTitle[0].title).toBe("The Avengers");
    expect(sortedByTitle[3].title).toBe("A Titanic");
  });

  it('should remove leading articles from titles', () => {
    expect(removeLeadingArticles("The Dark Knight")).toBe("Dark Knight");
    expect(removeLeadingArticles("An American Beauty")).toBe("American Beauty");
    expect(removeLeadingArticles("A Space Odyssey")).toBe("Space Odyssey");
  });
});
