const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// get quotes from api
let apiQuotes = [];

// show new quote
function newQuote() {
  // pick a random quote from apiQuotes array
  // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];  
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];  
  // 1643 quotes
  console.log(': ', quote);

  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json()
    console.log(': ', apiQuotes);
    console.log(': ', apiQuotes[12]);

    newQuote();
  } catch (error) {
    
  }
}

// on load
getQuotes();

// newQuote(); // local