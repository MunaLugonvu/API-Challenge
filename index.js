const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('04dcdb75a7d34496ba4fa437ceb8283b')

var readlineSync = require('readline-sync')
//et chosenSource, newsSource;
 var newsSource = readlineSync.question('Which news Source would you prefer?\n 1 For BBC news\n 2 For Fox News\n 3 For Aljazzera News\n 4. For BBC Sport News\n');
let chosenSource,keyword;
if(newsSource === '1'){
    chosenSource = 'bbc-news';
   }
   else if(newsSource === '2'){
   chosenSource = 'fox-news';
   }
   else if(newsSource === '3'){
   chosenSource = 'al-jazeera-english';
   }
   else if(newsSource === '4'){
   chosenSource = 'bbc-sport';
   }
   else{
   console.log('\x1b[31m',"You have to choose a letter\n");
   process.exit()//exit application
   }
   function articlesarray(prods) {
    let article_names = [];
    for (let i=0; i<prods.length; i+=1) {
    article_names.push('\x1b[33m',i+1 +"."+ prods[i].title);
    article_names.push('\x1b[34m',prods[i].description);
    article_names.push('\x1b[32m',prods[i].url);
    }
    return article_names.join('\r\n');
    }
   newsapi.v2.everything({
    sources: [chosenSource],
    q: [keyword],
    language: 'en',
    pageSize: 10
    }, function(error,result){
      if(error){
        console.log(error);
      }
      else{  
        if(result.totalResults != 0){
    console.log(articlesarray(result.articles));
    }
    else
    {
    console.log('\x1b[31m',"No results for that keyword within that time, or try again with the right spelling of the key word");
      }
    }
    });