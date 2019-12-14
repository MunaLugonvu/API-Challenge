const require = require('./index');
test("returns Invalid Input if user doesnot choose from given sources", () =>{
    expect(newsSource(6)).toBe('Invalid Input');
});
    
test("Enter a number to get news from a corresponding news source ", () => {
    expect(news_sources(1)).toBe("bbc-news");
    expect(news_sources(2)).toBe("fox-news");
    expect(news_sources(3)).toBe("al-jazeera-english");
    expect(news_sources(4)).toBe("bbc-sport");
  });