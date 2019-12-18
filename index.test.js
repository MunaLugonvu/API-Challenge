const require = require('./index');
test("returns Invalid Input if user doesnot choose from given sources", () =>{
    expect(newsSource(6)).toBe('Invalid Input');
});
    
test("Enter a number to get news from a corresponding news source ", () => {
    expect(news_sources(bbc)).toBe("bbc-news");
    expect(news_sources(fox)).toBe("fox-news");
    expect(news_sources(alJazeera)).toBe("al-jazeera-english");
    expect(news_sources(bbcSport)).toBe("bbc-sport");
  });