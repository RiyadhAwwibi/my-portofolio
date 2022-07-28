// Add single-quoted phrases or quotations here, separated
// by commas, to be randomly shown on page load
const quotes = [
    // Ideal length ~= 30 characters OR 1 emoji + 27 characters
    "🎶 Listening: Wonderwall",
    "🎶 Listening: The Bidding",
    "🎶 Listening: New Light",
    "📺 Watching: Peaky Blinders",
    "📺 Watching: Start-Up",
    "📺 Watching: Breaking Bad",
    "🎮 Playing: Chess",
    "🎮 Playing: Valorant",
    "🎮 Playing: Wordle",
  ];
  
  function randomQuote() {
    const quoteSpan = document.getElementById("quote");
    if (quoteSpan) {
      quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }
  }
  
  randomQuote();
  window.setInterval(randomQuote, 5000);