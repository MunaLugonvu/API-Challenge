const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('04dcdb75a7d34496ba4fa437ceb8283b')

var readlineSync = require('readline-sync')

 var newsSource = readlineSync.question('Which news Source would you prefer?\n 1 For BBC news\n 2 For Fox News\n 3 For Aljazzera News\n 4. For BBC Sport News\n');
let chosenSource;
var keyword = readlineSync.question('Any keyword to search for? ');
var bbc ='1'; var fox ='2'; var alJazeera = '3'; var bbcSport = '4';

switch ( newsSource){
  case bbc:
    chosenSource = 'bbc-news';
    break;
  case fox:
    chosenSource = 'fox-news' ;
    break;
  case alJazeera:
    chosenSource = 'al-jazeera-english';
    break;
  case bbcSport:
    chosenSource = 'bbc-sport';
    break;
  default:
       console.log('Invalid Input\n')
       
       process.exit();
}
    

//one could use an if statement
/*if(newsSource ===bbc){
    chosenSource = 'bbc-news';
   }
   else if(newsSource === fox){
   chosenSource = 'fox-news';
   }
   else if(newsSource === alJazeera){
   chosenSource = 'al-jazeera-english';
   }
   else if(newsSource === bbcSport){
   chosenSource = 'bbc-sport';
   }
   else{
   console.log("Invalid Input\n");

   process.exit()//exit application
   }*/
   
   function articlesArray(el) {   //articlesarray is an array of objects
    let articleNames = [];
    const neonGreen = '\x1b[32m';
    const yellow =  '\x1b[33m';
    const magenta = '\x1b[35m';
    for (let i=0; i<el.length; i+=1) {
    articleNames.push(neonGreen,i+1 +"."+ el[i].title);
    articleNames.push(yellow,el[i].description);
    articleNames.push(magenta ,el[i].url);
    }
    return articleNames.join('\r\n');
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
        if(result.totalResults != 0){ // if results exists search for keyword in results
    console.log(articlesArray(result.articles)); // return article based on keyword
    }
    else
    {
    console.log("No results for that keyword within that time, or try again with the right spelling of the key word");
      }
    }
    });
