const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// get quotes from api
let apiQuotes = [];

// show loader
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// show new quote
function newQuote() {
  loading();

  // pick a random quote from apiQuotes array
  // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];  
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];  
  // 1643 quotes
  console.log(': ', quote);

  // if author field is blank
  if (!quote.author) {
    authorText.textContent = "Unknown"
  } else {
    authorText.textContent = quote.author;
  }
  // if quote text length is long
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote')
  }

  quoteText.textContent = quote.text;
  complete();
}

async function getQuotes() {
  loading();

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

// twitter quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();

// newQuote(); // local

// loading();