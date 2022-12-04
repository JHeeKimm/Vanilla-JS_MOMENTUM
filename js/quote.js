const quotes = [
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain",
  },
  {
    quote:
      "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
    author: "Barbara Bush",
  },
  {
    quote:
      "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  { quote: "Do one thing every day that scares you.", author: "Anonymous" },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
