// get quotes from api
let apiQuotes = [];

// show new quote
function newQuote() {
  // pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];  // 1643
  console.log(': ', quote);
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