async function generateQuote() {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const quote = await response.json();
  return quote;
}

module.exports = generateQuote;
